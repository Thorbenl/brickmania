export type BrickData = {
  id: number
  status: string
  instance_created_date: string
  owner: string
  history: BrickHistoryData[]
}

export type BrickHistoryData = {
  history_id: number;
  id: number;
  instance_created_date: string
  instance_modified_date: string
  status: string
  history_date: string
  history_change_reason: string | null
  history_type: string
  owner: number
  history_user: number
}

export enum BrickStatus {
  YELLOW,
  GREEN,
  RED,
  COMPLETED,
}

export type BrickDataAPIResponse = {
  count: number,
  next: string | null,
  previous: string | null,
  results: BrickData[]
}
