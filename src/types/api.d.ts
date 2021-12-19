export interface IUser {
  id: number;
  user_id: string;
  full_name: string;
  avatar_url: string;
  lang: string;
}

export interface IReward {
  id: number;
  comment_id: number;
  object_type: string;
  object_id: number;
  user_id: string;
  slug: string;
  created_at: string;
}

export interface IComment {
  id: number;
  comment_id: number;
  site_id: number;
  user_id: string;
  slug: string;
  content: string;
  favor_count: number;
  reply_count: number;
  created_at: string;
  creator: IUser | null;
  reward: IReward | null;
  favored: boolean;
  favor_id: number;
}