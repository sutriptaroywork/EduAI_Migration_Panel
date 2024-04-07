export interface Helpers {
  status: Status;
  qms_type: QmsType;
  hurdle_type: HurdleType;
  client_type: ClientType;
  prefixes: Prefixes;
  invoice_status: InvoiceStatus;
  mode: Mode;
  validity: Validity;
  system_type: SystemType;
  server_type: ServerType;
  exchange: Exchange;
  product: Product;
  variety: Variety;
  pre_trade: PreTrade;
  post_trade: PostTrade;
}

export interface PreTrade {
  algo_header: string;
  algo_footer: string;
  non_algo_header: string;
  non_algo_footer: string;
  header: string;
  footer: string;
}
export interface PostTrade {
  algo_header: string;
  footer: string;
  non_algo_header: string;
}
export interface Status {
  ACTIVE: string;
  INACTIVE: string;
}
export interface QmsType {
  FIXED: string;
  PROPORTIONATE: string;
  DYNAMIC: string;
}
export interface HurdleType {
  SOFT: string;
  HARD: string;
}
export interface ClientType {
  CLIENT: string;
  DISTRIBUTOR: string;
}
export interface Prefixes {
  ORGANIZATION: string;
  BROKER: string;
  PORTFOLIO: string;
  QMS: string;
  SERVER: string;
  STRATEGY: string;
  SYSTEM: string;
  CLIENT: string;
  USER: string;
  INVOICE: string;
  DISTRIBUTOR: string;
}
export interface InvoiceStatus {
  UNPAID: string;
  PAID: string;
  OVERDUE: string;
}
export interface Mode {
  AUTO: string;
  MANUAL: string;
}
export interface Validity {
  DAY: string;
  IOC: string;
}
export interface SystemType {
  BUY: string;
  SELL: string;
  HEDGE: string;
}
export interface ServerType {
  COLO: string;
  NON_COLO: string;
}
export interface Exchange {
  NFO: string;
}
export interface Product {
  MIS: string;
  NRML: string;
}
export interface Variety {
  REGULAR: string;
}
