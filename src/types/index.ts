export * from "./global";
import { PROJECT_CONFIRM_TYPE } from "~@/constants";
import { Nullable } from "./global";
export interface ILocalProjectAddFields {
  isBid: boolean;
  bidError: Nullable<string>;
  confirm: PROJECT_CONFIRM_TYPE;
  our_cost: Nullable<number>;
  our_cover_letter: Nullable<string>;
}
export type ILocalProject = Omit<
  IFLProject,
  | "jobs"
  | "exchangerate"
  | "time"
  | "maxbudget"
  | "minbudget"
  | "free_bid_until"
  | "buyer"
  | "userId"
> & {
  exchangerate: number;
  time: number;
  maxbudget: number;
  minbudget: number;
  free_bid_until: number;
  userId: number;
  buyer: number;
  jobs: Array<{
    id: number;
    title: string;
  }>;
} & ILocalProjectAddFields;
export interface IFLProject {
  id: number;
  type: string;
  userName: string;
  actionText: string;
  projIsHourly: Nullable<boolean>;
  jobs: string[];
  jobString: string;
  linkUrl: string;
  title: string;
  text: string;
  userId: string;
  submitDate: string; // yyyy-MM-dd hh:mm:ss
  currency: string; // $
  currencyCode: string;
  exchangerate: string;
  nonpublic: Nullable<boolean>;
  time: string; // timestamp
  maxbudget: string;
  minbudget: string;
  appended_descr: string;
  urgent: Nullable<boolean>;
  featured: Nullable<boolean>;
  fulltime: Nullable<boolean>;
  nda: Nullable<boolean>;
  hidebids: Nullable<boolean>;
  ipcontract: Nullable<any>;
  recruiter: Nullable<boolean>;
  listed: Nullable<boolean>;
  extended: Nullable<any>;
  imgUrl: string;
  free_bid_until: string;
  buyer: Nullable<string>;
}
export interface IProject {
  appended_descr?: string | null;
  confirm?: number | null;
  created_at?: any | null;
  currency?: string | null;
  currencyCode?: string | null;
  id?: number | null;
  isBid?: boolean | null;
  jobString?: string | null;
  linkUrl?: string | null;
  maxbudget?: number | null;
  minbudget?: number | null;
  status?: string | null;
  submitDate?: any | null;
  text?: string | null;
  title?: string | null;
  type?: string | null;
  time?: number | null;
  updated_at?: any | null;
  userId?: number | null;
  userName?: string | null;
  dateString?: string;
  price?: string;
  bidError?: string;
  our_cover_letter?: string | null;
  our_cost?: string | null;
  enabled?: boolean;
}

export interface ISkillProject {
  id: number;
  isIgnored: boolean;
  title: string;
  __typename?: string;
}

export interface IProjectAwards {
  id?: number;
  description?: string;
  amount?: number;
}
export interface IUser {
  email: string;
  role: string;
  status: string;
  updated_at: any;
  name: string;
  tasks: any;
}
export interface IScripts {
  uid: string;
  updated_at: any;
  enable: boolean;
  spinSleepTime: number;
}
export interface ISettingBid {
  bid_rate: number | null;
  min_cost: number | null;
  timer: number | null;
  id: number | null;
  template: string | null;
}
export interface INotTask {
  id: number;
  phase: string;
  updated_at: any;
}
export interface IDetectPhases {
  id: number;
  phase: string;
}

export interface IMessageChatLog {
  __typename: "chat_log";
  message_id: number;
  message: string | null;
  message_source: any;
  thread_id: any;
  is_readed: boolean | null;
  onwer_id: any;
  created_at: any | null;
  id: number;
}

export interface IConversation {
  customer_id: number;
  id: number;
  project_id: number;
  unread_count: number;
  updated_at: any | null;
  user: any;
}
export interface IBoard {
  created_at?: any;
  description: string | null;
  title: string;
  id: number;
  archived: boolean;
}

interface IPortfolioSkillItem {
  id: number;
  title: string;
}
export interface IPortfolioItem {
  id: number;
  created_at: any;
  excerpt: string | null;
  tags: [string];
  description: string | null;
  skills: IPortfolioSkillItem[] | [];
  link: string | null;
  images: [string] | null;
}
