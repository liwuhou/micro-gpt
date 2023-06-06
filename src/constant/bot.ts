export interface Bot {
  avatar: string
  nickname: string
}

export type BotSet = 'Mircoblue'

export const BOT: Record<BotSet, Bot> = {
  Mircoblue: {
    avatar: '/Mircoblue.jpeg',
    nickname: '微蓝 Bot',
  },
}
