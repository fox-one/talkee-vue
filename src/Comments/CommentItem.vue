<template>
  <li ref="item" v-intersect="{ handler: handleIntersect }" :class="classes('comment-item', 'py-5')">
    <div v-show="isIntersecting" ref="itemContent">
      <v-layout justify-space-between align-start>
        <div :class="classes('comment-item-left')">
          <v-avatar
            size="32"
            :class="classes('comment-item-left-avatar')"
          >
            <v-img :src="avatar_url" />
          </v-avatar>
        </div>
        <v-layout :class="classes('comment-item-right')" column>
          <div :class="classes('comment-item-right-top')">
            <span :class="classes('comment-item-right-top-name', 'f-body-2 text--primary mr-2')">{{ full_name }}</span>
            <span :class="classes('comment-item-right-top-time', 'f-caption f-greyscale-3')">{{ created_at }}</span>
          </div>
          <div :class="`${classes('comment-item-right-content', 'mt-6 f-body-2')} ${isMore ? classes('comment-item-right-content-more') : ''}`">
            <p :class="classes('comment-item-right-content-txt', 'ma-0')" v-html="content" />
            <p :class="classes('comment-item-right-content-txt-copy', 'ma-0')" v-html="content" />
            <v-btn
              :class="classes('comment-item-right-content-btn', 'pa-0')"
              text
              small
              color="primary"
              height="16"
              @click="isMore = !isMore"
            >
              {{ isMore ? meta.less : meta.more }}
            </v-btn>
          </div>
        </v-layout>
        <meta-bar
          v-bind="$attrs"
          :comment="commentData"
          :reply="reply"
          :class="classes('comment-item-right-meta', 'flex-grow-0 ml-auto')"
          @click:reply="handleReply"
          @error="(e) => $emit('error', e)"
        />
      </v-layout>
      <components
        :is="subComment"
        v-bind="$attrs"
        v-show="showSubComment"
        class="mt-4"
        :show="showSubComment"
        :comment="commentData"
        :order="order"
        @subcomment="handleSubcomment"
        @keyboard="(state) => $emit('keyboard', state)"
        @error="(e) => $emit('error', e)"
      />
    </div>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  onMounted,
  onUpdated,
  nextTick,
  ref
} from '@vue/composition-api';
import { VLayout, VBtn, VAvatar, VImg } from 'vuetify/lib';
import { Intersect } from 'vuetify/lib/directives';
import marked from 'marked';
import DOMPurify from 'dompurify';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import MetaBar from './MetaBar.vue';
import SubComment from './SubComment.vue';
import { $t } from '@/i18n';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'CommentItem',
  components: { MetaBar, SubComment, VLayout, VBtn, VAvatar, VImg },
  directives: {
    intersect: Intersect
  },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    comment: {
      type: Object as PropType<IComment>,
      default: () => ({})
    },
    order: {
      type: String as PropType<'favor_count' | 'id' | 'id-asc' | 'id-desc'>,
      default: 'favor_count'
    },
    reply: {
      type: Boolean,
      default: false,
    },
    scrollRefresh: {
      type: Function,
      default: () => (function noop() {})
    }
  },
  setup(props, ctx) {
    const { prefixCls, comment, scrollRefresh } = props;
    const classes = classnames(prefixCls);
    const proxy = reactive({ showSubComment: false });
    const isMore = ref(false);
    const isIntersecting = ref(false);
    const itemContent = ref<HTMLDivElement>(null as any);
    const item = ref<HTMLLIElement>(null as any);
    const meta = {
      more: $t('content_more'),
      less: $t('content_less')
    };
    const commentData = ref(comment);
    const md = marked(DOMPurify.sanitize(comment?.content ?? ''));

    onMounted(() => {
      if (helper.notSupportIntersect()) {
        isIntersecting.value = true;
      }
    });

    onUpdated(() => {
      nextTick(() => {
        const minHeight = `${(itemContent.value?.clientHeight ?? 0) + 41}px`;
        if (minHeight === '41px') return;
        if (item.value?.style.minHeight !== minHeight) {
          (item.value as any).style.minHeight = minHeight;
          nextTick(() => scrollRefresh());
        }
      });
    });

    return {
      classes,
      avatar_url: comment?.creator?.avatar_url,
      full_name: comment?.creator?.full_name,
      created_at: helper.formatTime(comment.created_at),
      content: helper.urlify(md.substring(0, md.length - 2)),
      isMore,
      isIntersecting,
      item,
      itemContent,
      meta,
      commentData,
      ...proxy
    };
  },
  computed: {
    subComment(): any {
      return this.reply ? SubComment : null;
    }
  },
  methods: {
    handleReply() {
      this.showSubComment = !this.showSubComment;
    },
    handleSubcomment(c) {
      this.$emit('subcomment', c);
      this.$set(this.commentData, 'reply_count', this.commentData.reply_count + 1);
    },
    handleIntersect(_enteries, _observer, isIntersecting) {
      if (!helper.notSupportIntersect()) {
        this.isIntersecting = isIntersecting;
      }
    }
  }
});
</script>