<template>
  <v-layout :class="classes('comment-sub')" column align-end>
    <v-textarea
      v-model="content"
      solo
      height="60"
      :label="meta.label"
      :class="classes('comment-sub-textarea')"
    />
    <v-btn
      text
      small
      plain
      :ripple="false"
      color="primary"
      :class="classes('comment-sub-btn')"
      :loading="loading"
      @click="handleSubmit"
    >
      {{ meta.submit }}
    </v-btn>
    <section v-if="subcomments.length" :class="classes('comment-sub-wrapper', 'align-self-start mt-2')">
      <v-layout
        v-for="(sub, ind) in subcomments"
        :key="sub.id || ind"
        justify-space-between
        align-start
      >
        <div :class="classes('comment-sub-item-left')">
          <v-avatar
            size="24"
            :class="classes('comment-sub-item-left-avatar')"
          >
            <v-img :src="sub.creator.avatar_url" />
          </v-avatar>
        </div>
        <v-layout :class="classes('comment-sub-item-right')" column>
          <div :class="classes('comment-sub-item-right-top')">
            <span :class="classes('comment-sub-item-right-top-name', 'f-caption text--primary mr-2')">{{ sub.creator.full_name }}</span>
            <span :class="classes('comment-sub-item-right-top-time', 'f-greyscale-4')">{{ formatTime(sub.created_at) }}</span>
          </div>
          <div class="d-flex">
            <p :class="`${classes('comment-sub-item-right-content', 'mt-4 f-body-2')} ${isMore ? classes('comment-sub-item-right-content-more') : ''}`">
              <v-btn
                :class="classes('comment-sub-item-right-more', 'pa-0')"
                text
                small
                color="primary"
                @click="isMore = !isMore"
              >
                {{ isMore ? meta.less : meta.more }}
              </v-btn>
              {{ sub.content }}
            </p>
          </div>
        </v-layout>
        <meta-bar
          :comment="sub"
          :reply="false"
          :favor="favor"
          type="reply"
          :class="classes('comment-sub-item-right-meta', 'flex-grow-0 ml-auto')"
        />
      </v-layout>
    </section>
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  ref
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import apis from '@apis/index';
import { $t } from '@/i18n';
import MetaBar from './MetaBar.vue';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'SubComment',
  components: { MetaBar },
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
    favor: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const { prefixCls, comment, order } = props;
    const classes = classnames(prefixCls);
    const content = ref('');
    const loading = ref(false);
    const isMore = ref(false);
    const subcomments = ref([] as any[]);
    const meta = {
      label: $t('sub_comment_placeholder'),
      submit: $t('submit'),
      more: $t('content_more'),
      less: $t('content_less')
    };
    onMounted(async () => {
      const res = await apis.getSubComments(comment.id, order, 1, 15);
      subcomments.value = res.replies;
    });

    return { classes, content, loading, isMore, meta, subcomments };
  },
  methods: {
    async handleSubmit() {
      if (!this.content) return;
      const isLogin = helper.getToken() && helper.getProfile();
      if (!isLogin) {
        const url = helper.buildLoginURL();
        url && location.assign(url);
      } else {
        this.loading = true;
        try {
          const res = await apis.postSubComment(
            this.comment.id,
            this.content.trim(),
          );
          res.creator = helper.getProfile();
          this.subcomments.push(res);
          this.content = '';
        } catch (e) {
          this.$emit('error', e);
        }
        this.loading = false;
      }
    },
    formatTime(time: string) {
      return helper.formatTime(time);
    }
  }
});
</script>