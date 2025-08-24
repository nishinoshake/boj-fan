export const membersData = {
  members: [
    {
      id: "ueda",
      name: "植田和男",
      nickname: "植田総裁",
      thumbnail: "/members/member_ueda_thumb.jpg",
      stance: "ハト派",
      formerJob: "東京大学教授"
    },
    {
      id: "himino",
      name: "氷見野良三",
      nickname: "氷見野副総裁",
      thumbnail: "/members/member_himino_thumb.jpg",
      stance: "中立",
      formerJob: "金融庁長官"
    },
    {
      id: "uchida",
      name: "内田眞一",
      nickname: "内田副総裁",
      thumbnail: "/members/member_uchida_thumb.jpg",
      stance: "中立",
      formerJob: "日本銀行理事"
    },
    {
      id: "nakamura",
      name: "中村豊明",
      nickname: "中村審議委員",
      thumbnail: "/members/member_nakamura_thumb.jpg",
      stance: "中立",
      formerJob: "日本銀行理事"
    },
    {
      id: "noguchi",
      name: "野口旭",
      nickname: "野口審議委員",
      thumbnail: "/members/member_noguchi_thumb.jpg",
      stance: "ハト派",
      formerJob: "専修大学教授"
    },
    {
      id: "nakagawa",
      name: "中川順子",
      nickname: "中川審議委員",
      thumbnail: "/members/member_nakagawa_thumb.jpg",
      stance: "中立",
      formerJob: "立教大学教授"
    },
    {
      id: "tamura",
      name: "田村直樹",
      nickname: "田村審議委員",
      thumbnail: "/members/member_tamura_thumb.jpg",
      stance: "タカ派",
      formerJob: "みずほフィナンシャルグループ取締役会長"
    },
    {
      id: "takata",
      name: "高田創",
      nickname: "高田審議委員",
      thumbnail: "/members/member_takata_thumb.jpg",
      stance: "中立",
      formerJob: "岡三証券グローバル・リサーチ・センター理事長"
    },
    {
      id: "koeda",
      name: "小枝淳子",
      nickname: "小枝審議委員",
      thumbnail: "/members/member_koeda_thumb.jpg",
      stance: "中立",
      formerJob: "国際通貨基金審議役"
    }
  ]
} as const

export type MemberId = typeof membersData.members[number]['id']