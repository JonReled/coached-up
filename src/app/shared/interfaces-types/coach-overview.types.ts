export interface ICoachNotification {
  type: string,
  message: string,
  timestamp: number,
}

export interface ICoachOnlineStatus {
  isOnline: boolean,
  lastSeen: number,
}