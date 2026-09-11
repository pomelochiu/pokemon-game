const pokemonDB = [
    {
        "name": "妙蛙種子",
        "zhuyin": [
            "ㄇㄧㄠˋ",
            "ㄨㄚ",
            "ㄓㄨㄥˇ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        "name": "妙蛙草",
        "zhuyin": [
            "ㄇㄧㄠˋ",
            "ㄨㄚ",
            "ㄘㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
        "name": "妙蛙花",
        "zhuyin": [
            "ㄇㄧㄠˋ",
            "ㄨㄚ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
        "name": "小火龍",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄏㄨㄛˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
        "name": "火恐龍",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄎㄨㄥˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
        "name": "噴火龍",
        "zhuyin": [
            "ㄆㄣ",
            "ㄏㄨㄛˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
        "name": "傑尼龜",
        "zhuyin": [
            "ㄐㄧㄝˊ",
            "ㄋㄧˊ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
        "name": "卡咪龜",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄇㄧ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    },
    {
        "name": "水箭龜",
        "zhuyin": [
            "ㄕㄨㄟˇ",
            "ㄐㄧㄢˋ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    },
    {
        "name": "綠毛蟲",
        "zhuyin": [
            "ㄌㄩˋ",
            "ㄇㄠˊ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    },
    {
        "name": "鐵甲蛹",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄐㄧㄚˇ",
            "ㄩㄥˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    },
    {
        "name": "巴大蝶",
        "zhuyin": [
            "ㄅㄚ",
            "ㄉㄚˋ",
            "ㄉㄧㄝˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    },
    {
        "name": "獨角蟲",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄐㄧㄠˇ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
    },
    {
        "name": "鐵殼蛹",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄎㄜˊ",
            "ㄩㄥˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
    },
    {
        "name": "大針蜂",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄓㄣ",
            "ㄈㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    },
    {
        "name": "波波",
        "zhuyin": [
            "ㄅㄛ",
            "ㄅㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
    },
    {
        "name": "比比鳥",
        "zhuyin": [
            "ㄅㄧˇ",
            "ㄅㄧˇ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
    },
    {
        "name": "大比鳥",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄅㄧˇ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
    },
    {
        "name": "小拉達",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄌㄚ",
            "ㄉㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    },
    {
        "name": "拉達",
        "zhuyin": [
            "ㄌㄚ",
            "ㄉㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
    },
    {
        "name": "烈雀",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄑㄩㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
    },
    {
        "name": "大嘴雀",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄗㄨㄟˇ",
            "ㄑㄩㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
    },
    {
        "name": "阿柏蛇",
        "zhuyin": [
            "ㄚ",
            "ㄅㄞˇ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
    },
    {
        "name": "阿柏怪",
        "zhuyin": [
            "ㄚ",
            "ㄅㄞˇ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
    },
    {
        "name": "皮卡丘",
        "zhuyin": [
            "ㄆㄧˊ",
            "ㄎㄚˇ",
            "ㄑㄧㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
        "name": "雷丘",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄑㄧㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
    },
    {
        "name": "穿山鼠",
        "zhuyin": [
            "ㄔㄨㄢ",
            "ㄕㄢ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
    },
    {
        "name": "穿山王",
        "zhuyin": [
            "ㄔㄨㄢ",
            "ㄕㄢ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
    },
    {
        "name": "尼多蘭",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄉㄨㄛ",
            "ㄌㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
    },
    {
        "name": "尼多娜",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄉㄨㄛ",
            "ㄋㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
    },
    {
        "name": "尼多后",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄉㄨㄛ",
            "ㄏㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
    },
    {
        "name": "尼多朗",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄉㄨㄛ",
            "ㄌㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
    },
    {
        "name": "尼多力諾",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄉㄨㄛ",
            "ㄌㄧˋ",
            "ㄋㄨㄛˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
    },
    {
        "name": "尼多王",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄉㄨㄛ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
    },
    {
        "name": "皮皮",
        "zhuyin": [
            "ㄆㄧˊ",
            "ㄆㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
    },
    {
        "name": "皮可西",
        "zhuyin": [
            "ㄆㄧˊ",
            "ㄎㄜˇ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
    },
    {
        "name": "六尾",
        "zhuyin": [
            "ㄌㄧㄡˋ",
            "ㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    },
    {
        "name": "九尾",
        "zhuyin": [
            "ㄐㄧㄡˇ",
            "ㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
    },
    {
        "name": "胖丁",
        "zhuyin": [
            "ㄆㄤˋ",
            "ㄉㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    },
    {
        "name": "胖可丁",
        "zhuyin": [
            "ㄆㄤˋ",
            "ㄎㄜˇ",
            "ㄉㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
    },
    {
        "name": "超音蝠",
        "zhuyin": [
            "ㄔㄠ",
            "ㄧㄣ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
    },
    {
        "name": "大嘴蝠",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄗㄨㄟˇ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
    },
    {
        "name": "走路草",
        "zhuyin": [
            "ㄗㄡˇ",
            "ㄌㄨˋ",
            "ㄘㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
    },
    {
        "name": "臭臭花",
        "zhuyin": [
            "ㄔㄡˋ",
            "ㄔㄡˋ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
    },
    {
        "name": "霸王花",
        "zhuyin": [
            "ㄅㄚˋ",
            "ㄨㄤˊ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
    },
    {
        "name": "派拉斯",
        "zhuyin": [
            "ㄆㄞˋ",
            "ㄌㄚ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
    },
    {
        "name": "派拉斯特",
        "zhuyin": [
            "ㄆㄞˋ",
            "ㄌㄚ",
            "ㄙ",
            "ㄊㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
    },
    {
        "name": "毛球",
        "zhuyin": [
            "ㄇㄠˊ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
    },
    {
        "name": "摩魯蛾",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄌㄨˇ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
    },
    {
        "name": "地鼠",
        "zhuyin": [
            "ㄉㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
    },
    {
        "name": "三地鼠",
        "zhuyin": [
            "ㄙㄢ",
            "ㄉㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
    },
    {
        "name": "喵喵",
        "zhuyin": [
            "ㄇㄧㄠ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
    },
    {
        "name": "貓老大",
        "zhuyin": [
            "ㄇㄠ",
            "ㄌㄠˇ",
            "ㄉㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
    },
    {
        "name": "可達鴨",
        "zhuyin": [
            "ㄎㄜˇ",
            "ㄉㄚˊ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
    },
    {
        "name": "哥達鴨",
        "zhuyin": [
            "ㄍㄜ",
            "ㄉㄚˊ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
    },
    {
        "name": "猴怪",
        "zhuyin": [
            "ㄏㄡˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
    },
    {
        "name": "火爆猴",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄅㄠˋ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
    },
    {
        "name": "卡蒂狗",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄉㄧˋ",
            "ㄍㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
    },
    {
        "name": "風速狗",
        "zhuyin": [
            "ㄈㄥ",
            "ㄙㄨˋ",
            "ㄍㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
    },
    {
        "name": "蚊香蝌蚪",
        "zhuyin": [
            "ㄨㄣˊ",
            "ㄒㄧㄤ",
            "ㄎㄜ",
            "ㄉㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
    },
    {
        "name": "蚊香君",
        "zhuyin": [
            "ㄨㄣˊ",
            "ㄒㄧㄤ",
            "ㄐㄩㄣ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
    },
    {
        "name": "蚊香泳士",
        "zhuyin": [
            "ㄨㄣˊ",
            "ㄒㄧㄤ",
            "ㄩㄥˇ",
            "ㄕˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
    },
    {
        "name": "凱西",
        "zhuyin": [
            "ㄎㄞˇ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
    },
    {
        "name": "勇基拉",
        "zhuyin": [
            "ㄩㄥˇ",
            "ㄐㄧ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
    },
    {
        "name": "胡地",
        "zhuyin": [
            "ㄏㄨˊ",
            "ㄉㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
    },
    {
        "name": "腕力",
        "zhuyin": [
            "ㄨㄢˋ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
    },
    {
        "name": "豪力",
        "zhuyin": [
            "ㄏㄠˊ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
    },
    {
        "name": "怪力",
        "zhuyin": [
            "ㄍㄨㄞˋ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
    },
    {
        "name": "喇叭芽",
        "zhuyin": [
            "ㄌㄚˇ",
            "ㄅㄚ",
            "ㄧㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
    },
    {
        "name": "口呆花",
        "zhuyin": [
            "ㄎㄡˇ",
            "ㄉㄞ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
    },
    {
        "name": "大食花",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄕˊ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
    },
    {
        "name": "瑪瑙水母",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄋㄠˇ",
            "ㄕㄨㄟˇ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
    },
    {
        "name": "毒刺水母",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄘˋ",
            "ㄕㄨㄟˇ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
    },
    {
        "name": "小拳石",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄑㄩㄢˊ",
            "ㄕˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
    },
    {
        "name": "隆隆石",
        "zhuyin": [
            "ㄌㄨㄥˊ",
            "ㄌㄨㄥˊ",
            "ㄕˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
    },
    {
        "name": "隆隆岩",
        "zhuyin": [
            "ㄌㄨㄥˊ",
            "ㄌㄨㄥˊ",
            "ㄧㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
    },
    {
        "name": "小火馬",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄏㄨㄛˇ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
    },
    {
        "name": "烈焰馬",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄧㄢˋ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
    },
    {
        "name": "呆呆獸",
        "zhuyin": [
            "ㄉㄞ",
            "ㄉㄞ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
    },
    {
        "name": "呆殼獸",
        "zhuyin": [
            "ㄉㄞ",
            "ㄎㄜˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
    },
    {
        "name": "小磁怪",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄘˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
    },
    {
        "name": "三合一磁怪",
        "zhuyin": [
            "ㄙㄢ",
            "ㄏㄜˊ",
            "ㄧ",
            "ㄘˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
    },
    {
        "name": "大蔥鴨",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄘㄨㄥ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
    },
    {
        "name": "嘟嘟",
        "zhuyin": [
            "ㄉㄨ",
            "ㄉㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
    },
    {
        "name": "嘟嘟利",
        "zhuyin": [
            "ㄉㄨ",
            "ㄉㄨ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
    },
    {
        "name": "小海獅",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄏㄞˇ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
    },
    {
        "name": "白海獅",
        "zhuyin": [
            "ㄅㄞˊ",
            "ㄏㄞˇ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
    },
    {
        "name": "臭泥",
        "zhuyin": [
            "ㄔㄡˋ",
            "ㄋㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
    },
    {
        "name": "臭臭泥",
        "zhuyin": [
            "ㄔㄡˋ",
            "ㄔㄡˋ",
            "ㄋㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
    },
    {
        "name": "大舌貝",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄕㄜˊ",
            "ㄅㄟˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
    },
    {
        "name": "刺甲貝",
        "zhuyin": [
            "ㄘˋ",
            "ㄐㄧㄚˇ",
            "ㄅㄟˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
    },
    {
        "name": "鬼斯",
        "zhuyin": [
            "ㄍㄨㄟˇ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
    },
    {
        "name": "鬼斯通",
        "zhuyin": [
            "ㄍㄨㄟˇ",
            "ㄙ",
            "ㄊㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
    },
    {
        "name": "耿鬼",
        "zhuyin": [
            "ㄍㄥˇ",
            "ㄍㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
    },
    {
        "name": "大岩蛇",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄧㄢˊ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
    },
    {
        "name": "催眠貘",
        "zhuyin": [
            "ㄘㄨㄟ",
            "ㄇㄧㄢˊ",
            "ㄇㄛˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
    },
    {
        "name": "引夢貘人",
        "zhuyin": [
            "ㄧㄣˇ",
            "ㄇㄥˋ",
            "ㄇㄛˋ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
    },
    {
        "name": "大鉗蟹",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄑㄧㄢˊ",
            "ㄒㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
    },
    {
        "name": "巨鉗蟹",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄑㄧㄢˊ",
            "ㄒㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
    },
    {
        "name": "霹靂電球",
        "zhuyin": [
            "ㄆㄧ",
            "ㄌㄧˋ",
            "ㄉㄧㄢˋ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
    },
    {
        "name": "頑皮雷彈",
        "zhuyin": [
            "ㄨㄢˊ",
            "ㄆㄧˊ",
            "ㄌㄟˊ",
            "ㄉㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
    },
    {
        "name": "蛋蛋",
        "zhuyin": [
            "ㄉㄢˋ",
            "ㄉㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
    },
    {
        "name": "椰蛋樹",
        "zhuyin": [
            "ㄧㄝ",
            "ㄉㄢˋ",
            "ㄕㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
    },
    {
        "name": "卡拉卡拉",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄌㄚ",
            "ㄎㄚˇ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
    },
    {
        "name": "嘎啦嘎啦",
        "zhuyin": [
            "ㄍㄚ",
            "ㄌㄚ",
            "ㄍㄚ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
    },
    {
        "name": "飛腿郎",
        "zhuyin": [
            "ㄈㄟ",
            "ㄊㄨㄟˇ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
    },
    {
        "name": "快拳郎",
        "zhuyin": [
            "ㄎㄨㄞˋ",
            "ㄑㄩㄢˊ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
    },
    {
        "name": "大舌頭",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄕㄜˊ",
            "ㄊㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
    },
    {
        "name": "瓦斯彈",
        "zhuyin": [
            "ㄨㄚˇ",
            "ㄙ",
            "ㄉㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
    },
    {
        "name": "雙彈瓦斯",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄉㄢˋ",
            "ㄨㄚˇ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
    },
    {
        "name": "獨角犀牛",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄐㄧㄠˇ",
            "ㄒㄧ",
            "ㄋㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
    },
    {
        "name": "鑽角犀獸",
        "zhuyin": [
            "ㄗㄨㄢ",
            "ㄐㄧㄠˇ",
            "ㄒㄧ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
    },
    {
        "name": "吉利蛋",
        "zhuyin": [
            "ㄐㄧˊ",
            "ㄌㄧˋ",
            "ㄉㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
    },
    {
        "name": "蔓藤怪",
        "zhuyin": [
            "ㄇㄢˋ",
            "ㄊㄥˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
    },
    {
        "name": "袋獸",
        "zhuyin": [
            "ㄉㄞˋ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
    },
    {
        "name": "墨海馬",
        "zhuyin": [
            "ㄇㄛˋ",
            "ㄏㄞˇ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
    },
    {
        "name": "海刺龍",
        "zhuyin": [
            "ㄏㄞˇ",
            "ㄘˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
    },
    {
        "name": "角金魚",
        "zhuyin": [
            "ㄐㄧㄠˇ",
            "ㄐㄧㄣ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
    },
    {
        "name": "金魚王",
        "zhuyin": [
            "ㄐㄧㄣ",
            "ㄩˊ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
    },
    {
        "name": "海星星",
        "zhuyin": [
            "ㄏㄞˇ",
            "ㄒㄧㄥ",
            "ㄒㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
    },
    {
        "name": "寶石海星",
        "zhuyin": [
            "ㄅㄠˇ",
            "ㄕˊ",
            "ㄏㄞˇ",
            "ㄒㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
    },
    {
        "name": "魔牆人偶",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄑㄧㄤˊ",
            "ㄖㄣˊ",
            "ㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
    },
    {
        "name": "飛天螳螂",
        "zhuyin": [
            "ㄈㄟ",
            "ㄊㄧㄢ",
            "ㄊㄤˊ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
    },
    {
        "name": "迷唇姐",
        "zhuyin": [
            "ㄇㄧˊ",
            "ㄔㄨㄣˊ",
            "ㄐㄧㄝˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
    },
    {
        "name": "電擊獸",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄐㄧ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
    },
    {
        "name": "鴨嘴火獸",
        "zhuyin": [
            "ㄧㄚ",
            "ㄗㄨㄟˇ",
            "ㄏㄨㄛˇ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
    },
    {
        "name": "凱羅斯",
        "zhuyin": [
            "ㄎㄞˇ",
            "ㄌㄨㄛˊ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
    },
    {
        "name": "肯泰羅",
        "zhuyin": [
            "ㄎㄣˇ",
            "ㄊㄞˋ",
            "ㄌㄨㄛˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
    },
    {
        "name": "鯉魚王",
        "zhuyin": [
            "ㄌㄧˇ",
            "ㄩˊ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
    },
    {
        "name": "暴鯉龍",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄌㄧˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
    },
    {
        "name": "拉普拉斯",
        "zhuyin": [
            "ㄌㄚ",
            "ㄆㄨˇ",
            "ㄌㄚ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
    },
    {
        "name": "百變怪",
        "zhuyin": [
            "ㄅㄞˇ",
            "ㄅㄧㄢˋ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    },
    {
        "name": "伊布",
        "zhuyin": [
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
    },
    {
        "name": "水伊布",
        "zhuyin": [
            "ㄕㄨㄟˇ",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
    },
    {
        "name": "雷伊布",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
    },
    {
        "name": "火伊布",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
    },
    {
        "name": "多邊獸",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄅㄧㄢ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
    },
    {
        "name": "菊石獸",
        "zhuyin": [
            "ㄐㄩˊ",
            "ㄕˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
    },
    {
        "name": "多刺菊石獸",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄘˋ",
            "ㄐㄩˊ",
            "ㄕˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
    },
    {
        "name": "化石盔",
        "zhuyin": [
            "ㄏㄨㄚˋ",
            "ㄕˊ",
            "ㄎㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
    },
    {
        "name": "鐮刀盔",
        "zhuyin": [
            "ㄌㄧㄢˊ",
            "ㄉㄠ",
            "ㄎㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
    },
    {
        "name": "化石翼龍",
        "zhuyin": [
            "ㄏㄨㄚˋ",
            "ㄕˊ",
            "ㄧˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
    },
    {
        "name": "卡比獸",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄅㄧˇ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {
        "name": "急凍鳥",
        "zhuyin": [
            "ㄐㄧˊ",
            "ㄉㄨㄥˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
    },
    {
        "name": "閃電鳥",
        "zhuyin": [
            "ㄕㄢˇ",
            "ㄉㄧㄢˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
    },
    {
        "name": "火焰鳥",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄧㄢˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
    },
    {
        "name": "迷你龍",
        "zhuyin": [
            "ㄇㄧˊ",
            "ㄋㄧˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
    },
    {
        "name": "哈克龍",
        "zhuyin": [
            "ㄏㄚ",
            "ㄎㄜˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
    },
    {
        "name": "快龍",
        "zhuyin": [
            "ㄎㄨㄞˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
    },
    {
        "name": "超夢",
        "zhuyin": [
            "ㄔㄠ",
            "ㄇㄥˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    },
    {
        "name": "夢幻",
        "zhuyin": [
            "ㄇㄥˋ",
            "ㄏㄨㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
    },
    {
        "name": "菊草葉",
        "zhuyin": [
            "ㄐㄩˊ",
            "ㄘㄠˇ",
            "ㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
    },
    {
        "name": "月桂葉",
        "zhuyin": [
            "ㄩㄝˋ",
            "ㄍㄨㄟˋ",
            "ㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
    },
    {
        "name": "大竺葵",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄓㄨˊ",
            "ㄎㄨㄟˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
    },
    {
        "name": "火球鼠",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄑㄧㄡˊ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
    },
    {
        "name": "火岩鼠",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄧㄢˊ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
    },
    {
        "name": "火爆獸",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄅㄠˋ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
    },
    {
        "name": "小鋸鱷",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄐㄩˋ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
    },
    {
        "name": "藍鱷",
        "zhuyin": [
            "ㄌㄢˊ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
    },
    {
        "name": "大力鱷",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄌㄧˋ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
    },
    {
        "name": "尾立",
        "zhuyin": [
            "ㄨㄟˇ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
    },
    {
        "name": "大尾立",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄨㄟˇ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
    },
    {
        "name": "咕咕",
        "zhuyin": [
            "ㄍㄨ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
    },
    {
        "name": "貓頭夜鷹",
        "zhuyin": [
            "ㄇㄠ",
            "ㄊㄡˊ",
            "ㄧㄝˋ",
            "ㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
    },
    {
        "name": "芭瓢蟲",
        "zhuyin": [
            "ㄅㄚ",
            "ㄆㄧㄠˊ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
    },
    {
        "name": "安瓢蟲",
        "zhuyin": [
            "ㄢ",
            "ㄆㄧㄠˊ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
    },
    {
        "name": "圓絲蛛",
        "zhuyin": [
            "ㄩㄢˊ",
            "ㄙ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
    },
    {
        "name": "阿利多斯",
        "zhuyin": [
            "ㄚ",
            "ㄌㄧˋ",
            "ㄉㄨㄛ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
    },
    {
        "name": "叉字蝠",
        "zhuyin": [
            "ㄔㄚ",
            "ㄗˋ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
    },
    {
        "name": "燈籠魚",
        "zhuyin": [
            "ㄉㄥ",
            "ㄌㄨㄥˊ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
    },
    {
        "name": "電燈怪",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄉㄥ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
    },
    {
        "name": "皮丘",
        "zhuyin": [
            "ㄆㄧˊ",
            "ㄑㄧㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
    },
    {
        "name": "皮寶寶",
        "zhuyin": [
            "ㄆㄧˊ",
            "ㄅㄠˇ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
    },
    {
        "name": "寶寶丁",
        "zhuyin": [
            "ㄅㄠˇ",
            "ㄅㄠˇ",
            "ㄉㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
    },
    {
        "name": "波克比",
        "zhuyin": [
            "ㄅㄛ",
            "ㄎㄜˋ",
            "ㄅㄧˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
    },
    {
        "name": "波克基古",
        "zhuyin": [
            "ㄅㄛ",
            "ㄎㄜˋ",
            "ㄐㄧ",
            "ㄍㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
    },
    {
        "name": "天然雀",
        "zhuyin": [
            "ㄊㄧㄢ",
            "ㄖㄢˊ",
            "ㄑㄩㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
    },
    {
        "name": "天然鳥",
        "zhuyin": [
            "ㄊㄧㄢ",
            "ㄖㄢˊ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
    },
    {
        "name": "咩利羊",
        "zhuyin": [
            "ㄇㄧㄝ",
            "ㄌㄧˋ",
            "ㄧㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
    },
    {
        "name": "茸茸羊",
        "zhuyin": [
            "ㄖㄨㄥ",
            "ㄖㄨㄥ",
            "ㄧㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
    },
    {
        "name": "電龍",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
    },
    {
        "name": "美麗花",
        "zhuyin": [
            "ㄇㄟˇ",
            "ㄌㄧˋ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
    },
    {
        "name": "瑪力露",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄌㄧˋ",
            "ㄌㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
    },
    {
        "name": "瑪力露麗",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄌㄧˋ",
            "ㄌㄨˋ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
    },
    {
        "name": "樹才怪",
        "zhuyin": [
            "ㄕㄨˋ",
            "ㄘㄞˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
    },
    {
        "name": "蚊香蛙皇",
        "zhuyin": [
            "ㄨㄣˊ",
            "ㄒㄧㄤ",
            "ㄨㄚ",
            "ㄏㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
    },
    {
        "name": "毽子草",
        "zhuyin": [
            "ㄐㄧㄢˋ",
            "ㄗ˙",
            "ㄘㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
    },
    {
        "name": "毽子花",
        "zhuyin": [
            "ㄐㄧㄢˋ",
            "ㄗ˙",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
    },
    {
        "name": "毽子棉",
        "zhuyin": [
            "ㄐㄧㄢˋ",
            "ㄗ˙",
            "ㄇㄧㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
    },
    {
        "name": "長尾怪手",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄨㄟˇ",
            "ㄍㄨㄞˋ",
            "ㄕㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
    },
    {
        "name": "向日種子",
        "zhuyin": [
            "ㄒㄧㄤˋ",
            "ㄖˋ",
            "ㄓㄨㄥˇ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
    },
    {
        "name": "向日花怪",
        "zhuyin": [
            "ㄒㄧㄤˋ",
            "ㄖˋ",
            "ㄏㄨㄚ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
    },
    {
        "name": "蜻蜻蜓",
        "zhuyin": [
            "ㄑㄧㄥ",
            "ㄑㄧㄥ",
            "ㄊㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
    },
    {
        "name": "烏波",
        "zhuyin": [
            "ㄨ",
            "ㄅㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
    },
    {
        "name": "沼王",
        "zhuyin": [
            "ㄓㄠˇ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
    },
    {
        "name": "太陽伊布",
        "zhuyin": [
            "ㄊㄞˋ",
            "ㄧㄤˊ",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
    },
    {
        "name": "月亮伊布",
        "zhuyin": [
            "ㄩㄝˋ",
            "ㄌㄧㄤˋ",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
    },
    {
        "name": "黑暗鴉",
        "zhuyin": [
            "ㄏㄟ",
            "ㄢˋ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
    },
    {
        "name": "呆呆王",
        "zhuyin": [
            "ㄉㄞ",
            "ㄉㄞ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
    },
    {
        "name": "夢妖",
        "zhuyin": [
            "ㄇㄥˋ",
            "ㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
    },
    {
        "name": "未知圖騰",
        "zhuyin": [
            "ㄨㄟˋ",
            "ㄓ",
            "ㄊㄨˊ",
            "ㄊㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
    },
    {
        "name": "果然翁",
        "zhuyin": [
            "ㄍㄨㄛˇ",
            "ㄖㄢˊ",
            "ㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
    },
    {
        "name": "麒麟奇",
        "zhuyin": [
            "ㄑㄧˊ",
            "ㄌㄧㄣˊ",
            "ㄑㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
    },
    {
        "name": "榛果球",
        "zhuyin": [
            "ㄓㄣ",
            "ㄍㄨㄛˇ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
    },
    {
        "name": "佛烈托斯",
        "zhuyin": [
            "ㄈㄨˊ",
            "ㄌㄧㄝˋ",
            "ㄊㄨㄛ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
    },
    {
        "name": "土龍弟弟",
        "zhuyin": [
            "ㄊㄨˇ",
            "ㄌㄨㄥˊ",
            "ㄉㄧˋ",
            "ㄉㄧ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
    },
    {
        "name": "天蠍",
        "zhuyin": [
            "ㄊㄧㄢ",
            "ㄒㄧㄝ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
    },
    {
        "name": "大鋼蛇",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄍㄤ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
    },
    {
        "name": "布魯",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄌㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
    },
    {
        "name": "布魯皇",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄌㄨˇ",
            "ㄏㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
    },
    {
        "name": "千針魚",
        "zhuyin": [
            "ㄑㄧㄢ",
            "ㄓㄣ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
    },
    {
        "name": "巨鉗螳螂",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄑㄧㄢˊ",
            "ㄊㄤˊ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
    },
    {
        "name": "壺壺",
        "zhuyin": [
            "ㄏㄨˊ",
            "ㄏㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
    },
    {
        "name": "赫拉克羅斯",
        "zhuyin": [
            "ㄏㄜˋ",
            "ㄌㄚ",
            "ㄎㄜˋ",
            "ㄌㄨㄛˊ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
    },
    {
        "name": "狃拉",
        "zhuyin": [
            "ㄋㄧㄡˇ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
    },
    {
        "name": "熊寶寶",
        "zhuyin": [
            "ㄒㄩㄥˊ",
            "ㄅㄠˇ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
    },
    {
        "name": "圈圈熊",
        "zhuyin": [
            "ㄑㄩㄢ",
            "ㄑㄩㄢ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
    },
    {
        "name": "熔岩蟲",
        "zhuyin": [
            "ㄖㄨㄥˊ",
            "ㄧㄢˊ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
    },
    {
        "name": "熔岩蝸牛",
        "zhuyin": [
            "ㄖㄨㄥˊ",
            "ㄧㄢˊ",
            "ㄨㄛ",
            "ㄋㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
    },
    {
        "name": "小山豬",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄕㄢ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
    },
    {
        "name": "長毛豬",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄇㄠˊ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
    },
    {
        "name": "太陽珊瑚",
        "zhuyin": [
            "ㄊㄞˋ",
            "ㄧㄤˊ",
            "ㄕㄢ",
            "ㄏㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
    },
    {
        "name": "鐵炮魚",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄆㄠˋ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
    },
    {
        "name": "章魚桶",
        "zhuyin": [
            "ㄓㄤ",
            "ㄩˊ",
            "ㄊㄨㄥˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
    },
    {
        "name": "信使鳥",
        "zhuyin": [
            "ㄒㄧㄣˋ",
            "ㄕˇ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
    },
    {
        "name": "巨翅飛魚",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄔˋ",
            "ㄈㄟ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
    },
    {
        "name": "盔甲鳥",
        "zhuyin": [
            "ㄎㄨㄟ",
            "ㄐㄧㄚˇ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
    },
    {
        "name": "戴魯比",
        "zhuyin": [
            "ㄉㄞˋ",
            "ㄌㄨˇ",
            "ㄅㄧˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
    },
    {
        "name": "黑魯加",
        "zhuyin": [
            "ㄏㄟ",
            "ㄌㄨˇ",
            "ㄐㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
    },
    {
        "name": "刺龍王",
        "zhuyin": [
            "ㄘˋ",
            "ㄌㄨㄥˊ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
    },
    {
        "name": "小小象",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄒㄧㄠˇ",
            "ㄒㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
    },
    {
        "name": "頓甲",
        "zhuyin": [
            "ㄉㄨㄣˋ",
            "ㄐㄧㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
    },
    {
        "name": "多邊獸Ⅱ",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄅㄧㄢ",
            "ㄕㄡˋ",
            "Ⅱ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
    },
    {
        "name": "驚角鹿",
        "zhuyin": [
            "ㄐㄧㄥ",
            "ㄐㄧㄠˇ",
            "ㄌㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
    },
    {
        "name": "圖圖犬",
        "zhuyin": [
            "ㄊㄨˊ",
            "ㄊㄨˊ",
            "ㄑㄩㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
    },
    {
        "name": "無畏小子",
        "zhuyin": [
            "ㄨˊ",
            "ㄨㄟˋ",
            "ㄒㄧㄠˇ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
    },
    {
        "name": "戰舞郎",
        "zhuyin": [
            "ㄓㄢˋ",
            "ㄨˇ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
    },
    {
        "name": "迷唇娃",
        "zhuyin": [
            "ㄇㄧˊ",
            "ㄔㄨㄣˊ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
    },
    {
        "name": "電擊怪",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄐㄧ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
    },
    {
        "name": "鴨嘴寶寶",
        "zhuyin": [
            "ㄧㄚ",
            "ㄗㄨㄟˇ",
            "ㄅㄠˇ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
    },
    {
        "name": "大奶罐",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄋㄞˇ",
            "ㄍㄨㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
    },
    {
        "name": "幸福蛋",
        "zhuyin": [
            "ㄒㄧㄥˋ",
            "ㄈㄨˊ",
            "ㄉㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
    },
    {
        "name": "雷公",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄍㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
    },
    {
        "name": "炎帝",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄉㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
    },
    {
        "name": "水君",
        "zhuyin": [
            "ㄕㄨㄟˇ",
            "ㄐㄩㄣ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
    },
    {
        "name": "幼基拉斯",
        "zhuyin": [
            "ㄧㄡˋ",
            "ㄐㄧ",
            "ㄌㄚ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
    },
    {
        "name": "沙基拉斯",
        "zhuyin": [
            "ㄕㄚ",
            "ㄐㄧ",
            "ㄌㄚ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
    },
    {
        "name": "班基拉斯",
        "zhuyin": [
            "ㄅㄢ",
            "ㄐㄧ",
            "ㄌㄚ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
    },
    {
        "name": "洛奇亞",
        "zhuyin": [
            "ㄌㄨㄛˋ",
            "ㄑㄧˊ",
            "ㄧㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
    },
    {
        "name": "鳳王",
        "zhuyin": [
            "ㄈㄥˋ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
    },
    {
        "name": "時拉比",
        "zhuyin": [
            "ㄕˊ",
            "ㄌㄚ",
            "ㄅㄧˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
    },
    {
        "name": "木守宮",
        "zhuyin": [
            "ㄇㄨˋ",
            "ㄕㄡˇ",
            "ㄍㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
    },
    {
        "name": "森林蜥蜴",
        "zhuyin": [
            "ㄙㄣ",
            "ㄌㄧㄣˊ",
            "ㄒㄧ",
            "ㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
    },
    {
        "name": "蜥蜴王",
        "zhuyin": [
            "ㄒㄧ",
            "ㄧˋ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
    },
    {
        "name": "火稚雞",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄓˋ",
            "ㄐㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
    },
    {
        "name": "力壯雞",
        "zhuyin": [
            "ㄌㄧˋ",
            "ㄓㄨㄤˋ",
            "ㄐㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
    },
    {
        "name": "火焰雞",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄧㄢˋ",
            "ㄐㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
    },
    {
        "name": "水躍魚",
        "zhuyin": [
            "ㄕㄨㄟˇ",
            "ㄩㄝˋ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
    },
    {
        "name": "沼躍魚",
        "zhuyin": [
            "ㄓㄠˇ",
            "ㄩㄝˋ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
    },
    {
        "name": "巨沼怪",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄓㄠˇ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
    },
    {
        "name": "土狼犬",
        "zhuyin": [
            "ㄊㄨˇ",
            "ㄌㄤˊ",
            "ㄑㄩㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
    },
    {
        "name": "大狼犬",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄌㄤˊ",
            "ㄑㄩㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
    },
    {
        "name": "蛇紋熊",
        "zhuyin": [
            "ㄕㄜˊ",
            "ㄨㄣˊ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
    },
    {
        "name": "直衝熊",
        "zhuyin": [
            "ㄓˊ",
            "ㄔㄨㄥ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
    },
    {
        "name": "刺尾蟲",
        "zhuyin": [
            "ㄘˋ",
            "ㄨㄟˇ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
    },
    {
        "name": "甲殼繭",
        "zhuyin": [
            "ㄐㄧㄚˇ",
            "ㄎㄜˊ",
            "ㄐㄧㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
    },
    {
        "name": "狩獵鳳蝶",
        "zhuyin": [
            "ㄕㄡˋ",
            "ㄌㄧㄝˋ",
            "ㄈㄥˋ",
            "ㄉㄧㄝˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
    },
    {
        "name": "盾甲繭",
        "zhuyin": [
            "ㄉㄨㄣˋ",
            "ㄐㄧㄚˇ",
            "ㄐㄧㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
    },
    {
        "name": "毒粉蛾",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄈㄣˇ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
    },
    {
        "name": "蓮葉童子",
        "zhuyin": [
            "ㄌㄧㄢˊ",
            "ㄧㄝˋ",
            "ㄊㄨㄥˊ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
    },
    {
        "name": "蓮帽小童",
        "zhuyin": [
            "ㄌㄧㄢˊ",
            "ㄇㄠˋ",
            "ㄒㄧㄠˇ",
            "ㄊㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
    },
    {
        "name": "樂天河童",
        "zhuyin": [
            "ㄌㄜˋ",
            "ㄊㄧㄢ",
            "ㄏㄜˊ",
            "ㄊㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
    },
    {
        "name": "橡實果",
        "zhuyin": [
            "ㄒㄧㄤˋ",
            "ㄕˊ",
            "ㄍㄨㄛˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
    },
    {
        "name": "長鼻葉",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄅㄧˊ",
            "ㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
    },
    {
        "name": "狡猾天狗",
        "zhuyin": [
            "ㄐㄧㄠˇ",
            "ㄏㄨㄚˊ",
            "ㄊㄧㄢ",
            "ㄍㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
    },
    {
        "name": "傲骨燕",
        "zhuyin": [
            "ㄠˋ",
            "ㄍㄨˇ",
            "ㄧㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
    },
    {
        "name": "大王燕",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄨㄤˊ",
            "ㄧㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
    },
    {
        "name": "長翅鷗",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄔˋ",
            "ㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
    },
    {
        "name": "大嘴鷗",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄗㄨㄟˇ",
            "ㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
    },
    {
        "name": "拉魯拉絲",
        "zhuyin": [
            "ㄌㄚ",
            "ㄌㄨˇ",
            "ㄌㄚ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
    },
    {
        "name": "奇魯莉安",
        "zhuyin": [
            "ㄑㄧˊ",
            "ㄌㄨˇ",
            "ㄌㄧˋ",
            "ㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
    },
    {
        "name": "沙奈朵",
        "zhuyin": [
            "ㄕㄚ",
            "ㄋㄞˋ",
            "ㄉㄨㄛˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
    },
    {
        "name": "溜溜糖球",
        "zhuyin": [
            "ㄌㄧㄡ",
            "ㄌㄧㄡ",
            "ㄊㄤˊ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
    },
    {
        "name": "雨翅蛾",
        "zhuyin": [
            "ㄩˇ",
            "ㄔˋ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
    },
    {
        "name": "蘑蘑菇",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄇㄛˊ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
    },
    {
        "name": "斗笠菇",
        "zhuyin": [
            "ㄉㄡˇ",
            "ㄌㄧˋ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
    },
    {
        "name": "懶人獺",
        "zhuyin": [
            "ㄌㄢˇ",
            "ㄖㄣˊ",
            "ㄊㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
    },
    {
        "name": "過動猿",
        "zhuyin": [
            "ㄍㄨㄛˋ",
            "ㄉㄨㄥˋ",
            "ㄩㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
    },
    {
        "name": "請假王",
        "zhuyin": [
            "ㄑㄧㄥˇ",
            "ㄐㄧㄚˇ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
    },
    {
        "name": "土居忍士",
        "zhuyin": [
            "ㄊㄨˇ",
            "ㄐㄩ",
            "ㄖㄣˇ",
            "ㄕˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
    },
    {
        "name": "鐵面忍者",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄇㄧㄢˋ",
            "ㄖㄣˇ",
            "ㄓㄜˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
    },
    {
        "name": "脫殼忍者",
        "zhuyin": [
            "ㄊㄨㄛ",
            "ㄎㄜˊ",
            "ㄖㄣˇ",
            "ㄓㄜˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
    },
    {
        "name": "咕妞妞",
        "zhuyin": [
            "ㄍㄨ",
            "ㄋㄧㄡ",
            "ㄋㄧㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
    },
    {
        "name": "吼爆彈",
        "zhuyin": [
            "ㄏㄡˇ",
            "ㄅㄠˋ",
            "ㄉㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
    },
    {
        "name": "爆音怪",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄧㄣ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
    },
    {
        "name": "幕下力士",
        "zhuyin": [
            "ㄇㄨˋ",
            "ㄒㄧㄚˋ",
            "ㄌㄧˋ",
            "ㄕˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
    },
    {
        "name": "鐵掌力士",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄓㄤˇ",
            "ㄌㄧˋ",
            "ㄕˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
    },
    {
        "name": "露力麗",
        "zhuyin": [
            "ㄌㄨˋ",
            "ㄌㄧˋ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
    },
    {
        "name": "朝北鼻",
        "zhuyin": [
            "ㄔㄠˊ",
            "ㄅㄟˇ",
            "ㄅㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
    },
    {
        "name": "向尾喵",
        "zhuyin": [
            "ㄒㄧㄤˋ",
            "ㄨㄟˇ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
    },
    {
        "name": "優雅貓",
        "zhuyin": [
            "ㄧㄡ",
            "ㄧㄚˇ",
            "ㄇㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
    },
    {
        "name": "勾魂眼",
        "zhuyin": [
            "ㄍㄡ",
            "ㄏㄨㄣˊ",
            "ㄧㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
    },
    {
        "name": "大嘴娃",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄗㄨㄟˇ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png"
    },
    {
        "name": "可可多拉",
        "zhuyin": [
            "ㄎㄜˇ",
            "ㄎㄜˇ",
            "ㄉㄨㄛ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
    },
    {
        "name": "可多拉",
        "zhuyin": [
            "ㄎㄜˇ",
            "ㄉㄨㄛ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
    },
    {
        "name": "波士可多拉",
        "zhuyin": [
            "ㄅㄛ",
            "ㄕˋ",
            "ㄎㄜˇ",
            "ㄉㄨㄛ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
    },
    {
        "name": "瑪沙那",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄕㄚ",
            "ㄋㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
    },
    {
        "name": "恰雷姆",
        "zhuyin": [
            "ㄑㄧㄚˋ",
            "ㄌㄟˊ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
    },
    {
        "name": "落雷獸",
        "zhuyin": [
            "ㄌㄨㄛˋ",
            "ㄌㄟˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
    },
    {
        "name": "雷電獸",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄉㄧㄢˋ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
    },
    {
        "name": "正電拍拍",
        "zhuyin": [
            "ㄓㄥˋ",
            "ㄉㄧㄢˋ",
            "ㄆㄞ",
            "ㄆㄞ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
    },
    {
        "name": "負電拍拍",
        "zhuyin": [
            "ㄈㄨˋ",
            "ㄉㄧㄢˋ",
            "ㄆㄞ",
            "ㄆㄞ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
    },
    {
        "name": "電螢蟲",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄧㄥˊ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
    },
    {
        "name": "甜甜螢",
        "zhuyin": [
            "ㄊㄧㄢˊ",
            "ㄊㄧㄢˊ",
            "ㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
    },
    {
        "name": "毒薔薇",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄑㄧㄤˊ",
            "ㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
    },
    {
        "name": "溶食獸",
        "zhuyin": [
            "ㄖㄨㄥˊ",
            "ㄕˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
    },
    {
        "name": "吞食獸",
        "zhuyin": [
            "ㄊㄨㄣ",
            "ㄕˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
    },
    {
        "name": "利牙魚",
        "zhuyin": [
            "ㄌㄧˋ",
            "ㄧㄚˊ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
    },
    {
        "name": "巨牙鯊",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄧㄚˊ",
            "ㄕㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
    },
    {
        "name": "吼吼鯨",
        "zhuyin": [
            "ㄏㄡˇ",
            "ㄏㄡˇ",
            "ㄐㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
    },
    {
        "name": "吼鯨王",
        "zhuyin": [
            "ㄏㄡˇ",
            "ㄐㄧㄥ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
    },
    {
        "name": "呆火駝",
        "zhuyin": [
            "ㄉㄞ",
            "ㄏㄨㄛˇ",
            "ㄊㄨㄛˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
    },
    {
        "name": "噴火駝",
        "zhuyin": [
            "ㄆㄣ",
            "ㄏㄨㄛˇ",
            "ㄊㄨㄛˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
    },
    {
        "name": "煤炭龜",
        "zhuyin": [
            "ㄇㄟˊ",
            "ㄊㄢˋ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
    },
    {
        "name": "跳跳豬",
        "zhuyin": [
            "ㄊㄧㄠˋ",
            "ㄊㄧㄠˋ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
    },
    {
        "name": "噗噗豬",
        "zhuyin": [
            "ㄆㄨ",
            "ㄆㄨ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
    },
    {
        "name": "晃晃斑",
        "zhuyin": [
            "ㄏㄨㄤˋ",
            "ㄏㄨㄤˋ",
            "ㄅㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
    },
    {
        "name": "大顎蟻",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄜˋ",
            "ㄧˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
    },
    {
        "name": "超音波幼蟲",
        "zhuyin": [
            "ㄔㄠ",
            "ㄧㄣ",
            "ㄅㄛ",
            "ㄧㄡˋ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
    },
    {
        "name": "沙漠蜻蜓",
        "zhuyin": [
            "ㄕㄚ",
            "ㄇㄛˋ",
            "ㄑㄧㄥ",
            "ㄊㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
    },
    {
        "name": "刺球仙人掌",
        "zhuyin": [
            "ㄘˋ",
            "ㄑㄧㄡˊ",
            "ㄒㄧㄢ",
            "ㄖㄣˊ",
            "ㄓㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
    },
    {
        "name": "夢歌仙人掌",
        "zhuyin": [
            "ㄇㄥˋ",
            "ㄍㄜ",
            "ㄒㄧㄢ",
            "ㄖㄣˊ",
            "ㄓㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
    },
    {
        "name": "青綿鳥",
        "zhuyin": [
            "ㄑㄧㄥ",
            "ㄇㄧㄢˊ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
    },
    {
        "name": "七夕青鳥",
        "zhuyin": [
            "ㄑㄧ",
            "ㄒㄧ",
            "ㄑㄧㄥ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
    },
    {
        "name": "貓鼬斬",
        "zhuyin": [
            "ㄇㄠ",
            "ㄧㄡˋ",
            "ㄓㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
    },
    {
        "name": "飯匙蛇",
        "zhuyin": [
            "ㄈㄢˋ",
            "ㄕ˙",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
    },
    {
        "name": "月石",
        "zhuyin": [
            "ㄩㄝˋ",
            "ㄕˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
    },
    {
        "name": "太陽岩",
        "zhuyin": [
            "ㄊㄞˋ",
            "ㄧㄤˊ",
            "ㄧㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
    },
    {
        "name": "泥泥鰍",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄋㄧˊ",
            "ㄑㄧㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
    },
    {
        "name": "鯰魚王",
        "zhuyin": [
            "ㄋㄧㄢˊ",
            "ㄩˊ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
    },
    {
        "name": "龍蝦小兵",
        "zhuyin": [
            "ㄌㄨㄥˊ",
            "ㄒㄧㄚ",
            "ㄒㄧㄠˇ",
            "ㄅㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
    },
    {
        "name": "鐵螯龍蝦",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄠˊ",
            "ㄌㄨㄥˊ",
            "ㄒㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
    },
    {
        "name": "天秤偶",
        "zhuyin": [
            "ㄊㄧㄢ",
            "ㄔㄥˋ",
            "ㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
    },
    {
        "name": "念力土偶",
        "zhuyin": [
            "ㄋㄧㄢˋ",
            "ㄌㄧˋ",
            "ㄊㄨˇ",
            "ㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
    },
    {
        "name": "觸手百合",
        "zhuyin": [
            "ㄔㄨˋ",
            "ㄕㄡˇ",
            "ㄅㄞˇ",
            "ㄏㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
    },
    {
        "name": "搖籃百合",
        "zhuyin": [
            "ㄧㄠˊ",
            "ㄌㄢˊ",
            "ㄅㄞˇ",
            "ㄏㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
    },
    {
        "name": "太古羽蟲",
        "zhuyin": [
            "ㄊㄞˋ",
            "ㄍㄨˇ",
            "ㄩˇ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
    },
    {
        "name": "太古盔甲",
        "zhuyin": [
            "ㄊㄞˋ",
            "ㄍㄨˇ",
            "ㄎㄨㄟ",
            "ㄐㄧㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
    },
    {
        "name": "醜醜魚",
        "zhuyin": [
            "ㄔㄡˇ",
            "ㄔㄡˇ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
    },
    {
        "name": "美納斯",
        "zhuyin": [
            "ㄇㄟˇ",
            "ㄋㄚˋ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
    },
    {
        "name": "飄浮泡泡",
        "zhuyin": [
            "ㄆㄧㄠ",
            "ㄈㄨˊ",
            "ㄆㄠˋ",
            "ㄆㄠˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
    },
    {
        "name": "變隱龍",
        "zhuyin": [
            "ㄅㄧㄢˋ",
            "ㄧㄣˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
    },
    {
        "name": "怨影娃娃",
        "zhuyin": [
            "ㄩㄢˋ",
            "ㄧㄥˇ",
            "ㄨㄚˊ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
    },
    {
        "name": "詛咒娃娃",
        "zhuyin": [
            "ㄗㄨˇ",
            "ㄓㄡˋ",
            "ㄨㄚˊ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
    },
    {
        "name": "夜巡靈",
        "zhuyin": [
            "ㄧㄝˋ",
            "ㄒㄩㄣˊ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
    },
    {
        "name": "彷徨夜靈",
        "zhuyin": [
            "ㄆㄤˊ",
            "ㄏㄨㄤˊ",
            "ㄧㄝˋ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
    },
    {
        "name": "熱帶龍",
        "zhuyin": [
            "ㄖㄜˋ",
            "ㄉㄞˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
    },
    {
        "name": "風鈴鈴",
        "zhuyin": [
            "ㄈㄥ",
            "ㄌㄧㄥˊ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
    },
    {
        "name": "阿勃梭魯",
        "zhuyin": [
            "ㄚ",
            "ㄅㄛˊ",
            "ㄙㄨㄛ",
            "ㄌㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
    },
    {
        "name": "小果然",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄍㄨㄛˇ",
            "ㄖㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
    },
    {
        "name": "雪童子",
        "zhuyin": [
            "ㄒㄩㄝˇ",
            "ㄊㄨㄥˊ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
    },
    {
        "name": "冰鬼護",
        "zhuyin": [
            "ㄅㄧㄥ",
            "ㄍㄨㄟˇ",
            "ㄏㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
    },
    {
        "name": "海豹球",
        "zhuyin": [
            "ㄏㄞˇ",
            "ㄅㄠˋ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
    },
    {
        "name": "海魔獅",
        "zhuyin": [
            "ㄏㄞˇ",
            "ㄇㄛˊ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
    },
    {
        "name": "帝牙海獅",
        "zhuyin": [
            "ㄉㄧˋ",
            "ㄧㄚˊ",
            "ㄏㄞˇ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
    },
    {
        "name": "珍珠貝",
        "zhuyin": [
            "ㄓㄣ",
            "ㄓㄨ",
            "ㄅㄟˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
    },
    {
        "name": "獵斑魚",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄅㄢ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
    },
    {
        "name": "櫻花魚",
        "zhuyin": [
            "ㄧㄥ",
            "ㄏㄨㄚ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
    },
    {
        "name": "古空棘魚",
        "zhuyin": [
            "ㄍㄨˇ",
            "ㄎㄨㄥ",
            "ㄐㄧˊ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
    },
    {
        "name": "愛心魚",
        "zhuyin": [
            "ㄞˋ",
            "ㄒㄧㄣ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
    },
    {
        "name": "寶貝龍",
        "zhuyin": [
            "ㄅㄠˇ",
            "ㄅㄟˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
    },
    {
        "name": "甲殼龍",
        "zhuyin": [
            "ㄐㄧㄚˇ",
            "ㄎㄜˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
    },
    {
        "name": "暴飛龍",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄈㄟ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png"
    },
    {
        "name": "鐵啞鈴",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄧㄚˇ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
    },
    {
        "name": "金屬怪",
        "zhuyin": [
            "ㄐㄧㄣ",
            "ㄕㄨˇ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
    },
    {
        "name": "巨金怪",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄐㄧㄣ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
    },
    {
        "name": "雷吉洛克",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄐㄧˊ",
            "ㄌㄨㄛˋ",
            "ㄎㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
    },
    {
        "name": "雷吉艾斯",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄐㄧˊ",
            "ㄞˋ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
    },
    {
        "name": "雷吉斯奇魯",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄐㄧˊ",
            "ㄙ",
            "ㄑㄧˊ",
            "ㄌㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
    },
    {
        "name": "拉帝亞斯",
        "zhuyin": [
            "ㄌㄚ",
            "ㄉㄧˋ",
            "ㄧㄚˋ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png"
    },
    {
        "name": "拉帝歐斯",
        "zhuyin": [
            "ㄌㄚ",
            "ㄉㄧˋ",
            "ㄡ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png"
    },
    {
        "name": "蓋歐卡",
        "zhuyin": [
            "ㄍㄞˋ",
            "ㄡ",
            "ㄎㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
    },
    {
        "name": "固拉多",
        "zhuyin": [
            "ㄍㄨˋ",
            "ㄌㄚ",
            "ㄉㄨㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
    },
    {
        "name": "烈空坐",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄎㄨㄥ",
            "ㄗㄨㄛˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
    },
    {
        "name": "基拉祈",
        "zhuyin": [
            "ㄐㄧ",
            "ㄌㄚ",
            "ㄑㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
    },
    {
        "name": "代歐奇希斯",
        "zhuyin": [
            "ㄉㄞˋ",
            "ㄡ",
            "ㄑㄧˊ",
            "ㄒㄧ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
    },
    {
        "name": "草苗龜",
        "zhuyin": [
            "ㄘㄠˇ",
            "ㄇㄧㄠˊ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
    },
    {
        "name": "樹林龜",
        "zhuyin": [
            "ㄕㄨˋ",
            "ㄌㄧㄣˊ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
    },
    {
        "name": "土台龜",
        "zhuyin": [
            "ㄊㄨˇ",
            "ㄊㄞˊ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
    },
    {
        "name": "小火焰猴",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄏㄨㄛˇ",
            "ㄧㄢˋ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
    },
    {
        "name": "猛火猴",
        "zhuyin": [
            "ㄇㄥˇ",
            "ㄏㄨㄛˇ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
    },
    {
        "name": "烈焰猴",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄧㄢˋ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
    },
    {
        "name": "波加曼",
        "zhuyin": [
            "ㄅㄛ",
            "ㄐㄧㄚ",
            "ㄇㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
    },
    {
        "name": "波皇子",
        "zhuyin": [
            "ㄅㄛ",
            "ㄏㄨㄤˊ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
    },
    {
        "name": "帝王拿波",
        "zhuyin": [
            "ㄉㄧˋ",
            "ㄨㄤˊ",
            "ㄋㄚˊ",
            "ㄅㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
    },
    {
        "name": "姆克兒",
        "zhuyin": [
            "ㄇㄨˇ",
            "ㄎㄜˋ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
    },
    {
        "name": "姆克鳥",
        "zhuyin": [
            "ㄇㄨˇ",
            "ㄎㄜˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
    },
    {
        "name": "姆克鷹",
        "zhuyin": [
            "ㄇㄨˇ",
            "ㄎㄜˋ",
            "ㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
    },
    {
        "name": "大牙狸",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄧㄚˊ",
            "ㄌㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
    },
    {
        "name": "大尾狸",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄨㄟˇ",
            "ㄌㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
    },
    {
        "name": "圓法師",
        "zhuyin": [
            "ㄩㄢˊ",
            "ㄈㄚˇ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
    },
    {
        "name": "音箱蟀",
        "zhuyin": [
            "ㄧㄣ",
            "ㄒㄧㄤ",
            "ㄕㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
    },
    {
        "name": "小貓怪",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄇㄠ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
    },
    {
        "name": "勒克貓",
        "zhuyin": [
            "ㄌㄟ",
            "ㄎㄜˋ",
            "ㄇㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
    },
    {
        "name": "倫琴貓",
        "zhuyin": [
            "ㄌㄨㄣˊ",
            "ㄑㄧㄣˊ",
            "ㄇㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
    },
    {
        "name": "含羞苞",
        "zhuyin": [
            "ㄏㄢˊ",
            "ㄒㄧㄡ",
            "ㄅㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
    },
    {
        "name": "羅絲雷朵",
        "zhuyin": [
            "ㄌㄨㄛˊ",
            "ㄙ",
            "ㄌㄟˊ",
            "ㄉㄨㄛˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
    },
    {
        "name": "頭蓋龍",
        "zhuyin": [
            "ㄊㄡˊ",
            "ㄍㄞˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
    },
    {
        "name": "戰槌龍",
        "zhuyin": [
            "ㄓㄢˋ",
            "ㄔㄨㄟˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
    },
    {
        "name": "盾甲龍",
        "zhuyin": [
            "ㄉㄨㄣˋ",
            "ㄐㄧㄚˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
    },
    {
        "name": "護城龍",
        "zhuyin": [
            "ㄏㄨˋ",
            "ㄔㄥˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
    },
    {
        "name": "結草兒",
        "zhuyin": [
            "ㄐㄧㄝˊ",
            "ㄘㄠˇ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
    },
    {
        "name": "結草貴婦",
        "zhuyin": [
            "ㄐㄧㄝˊ",
            "ㄘㄠˇ",
            "ㄍㄨㄟˋ",
            "ㄈㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
    },
    {
        "name": "紳士蛾",
        "zhuyin": [
            "ㄕㄣ",
            "ㄕˋ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
    },
    {
        "name": "三蜜蜂",
        "zhuyin": [
            "ㄙㄢ",
            "ㄇㄧˋ",
            "ㄈㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
    },
    {
        "name": "蜂女王",
        "zhuyin": [
            "ㄈㄥ",
            "ㄋㄩˇ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
    },
    {
        "name": "帕奇利茲",
        "zhuyin": [
            "ㄆㄚˋ",
            "ㄑㄧˊ",
            "ㄌㄧˋ",
            "ㄗ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
    },
    {
        "name": "泳圈鼬",
        "zhuyin": [
            "ㄩㄥˇ",
            "ㄑㄩㄢ",
            "ㄧㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
    },
    {
        "name": "浮潛鼬",
        "zhuyin": [
            "ㄈㄨˊ",
            "ㄑㄧㄢˊ",
            "ㄧㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
    },
    {
        "name": "櫻花寶",
        "zhuyin": [
            "ㄧㄥ",
            "ㄏㄨㄚ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
    },
    {
        "name": "櫻花兒",
        "zhuyin": [
            "ㄧㄥ",
            "ㄏㄨㄚ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
    },
    {
        "name": "無殼海兔",
        "zhuyin": [
            "ㄨˊ",
            "ㄎㄜˊ",
            "ㄏㄞˇ",
            "ㄊㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
    },
    {
        "name": "海兔獸",
        "zhuyin": [
            "ㄏㄞˇ",
            "ㄊㄨˋ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
    },
    {
        "name": "雙尾怪手",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄨㄟˇ",
            "ㄍㄨㄞˋ",
            "ㄕㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
    },
    {
        "name": "飄飄球",
        "zhuyin": [
            "ㄆㄧㄠ",
            "ㄆㄧㄠ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
    },
    {
        "name": "隨風球",
        "zhuyin": [
            "ㄙㄨㄟˊ",
            "ㄈㄥ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
    },
    {
        "name": "捲捲耳",
        "zhuyin": [
            "ㄐㄩㄢˇ",
            "ㄐㄩㄢˇ",
            "ㄦˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
    },
    {
        "name": "長耳兔",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄦˇ",
            "ㄊㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
    },
    {
        "name": "夢妖魔",
        "zhuyin": [
            "ㄇㄥˋ",
            "ㄧㄠ",
            "ㄇㄛˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
    },
    {
        "name": "烏鴉頭頭",
        "zhuyin": [
            "ㄨ",
            "ㄧㄚ",
            "ㄊㄡˊ",
            "ㄊㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
    },
    {
        "name": "魅力喵",
        "zhuyin": [
            "ㄇㄟˋ",
            "ㄌㄧˋ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
    },
    {
        "name": "東施喵",
        "zhuyin": [
            "ㄉㄨㄥ",
            "ㄕ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
    },
    {
        "name": "鈴鐺響",
        "zhuyin": [
            "ㄌㄧㄥˊ",
            "ㄉㄤ",
            "ㄒㄧㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
    },
    {
        "name": "臭鼬噗",
        "zhuyin": [
            "ㄔㄡˋ",
            "ㄧㄡˋ",
            "ㄆㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
    },
    {
        "name": "坦克臭鼬",
        "zhuyin": [
            "ㄊㄢˇ",
            "ㄎㄜˋ",
            "ㄔㄡˋ",
            "ㄧㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
    },
    {
        "name": "銅鏡怪",
        "zhuyin": [
            "ㄊㄨㄥˊ",
            "ㄐㄧㄥˋ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
    },
    {
        "name": "青銅鐘",
        "zhuyin": [
            "ㄑㄧㄥ",
            "ㄊㄨㄥˊ",
            "ㄓㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
    },
    {
        "name": "盆才怪",
        "zhuyin": [
            "ㄆㄣˊ",
            "ㄘㄞˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
    },
    {
        "name": "魔尼尼",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄋㄧˊ",
            "ㄋㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
    },
    {
        "name": "小福蛋",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄈㄨˊ",
            "ㄉㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
    },
    {
        "name": "聒噪鳥",
        "zhuyin": [
            "ㄍㄨㄚ",
            "ㄗㄠˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
    },
    {
        "name": "花岩怪",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄧㄢˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
    },
    {
        "name": "圓陸鯊",
        "zhuyin": [
            "ㄩㄢˊ",
            "ㄌㄨˋ",
            "ㄕㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
    },
    {
        "name": "尖牙陸鯊",
        "zhuyin": [
            "ㄐㄧㄢ",
            "ㄧㄚˊ",
            "ㄌㄨˋ",
            "ㄕㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
    },
    {
        "name": "烈咬陸鯊",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄧㄠˇ",
            "ㄌㄨˋ",
            "ㄕㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
    },
    {
        "name": "小卡比獸",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄎㄚˇ",
            "ㄅㄧˇ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
    },
    {
        "name": "利歐路",
        "zhuyin": [
            "ㄌㄧˋ",
            "ㄡ",
            "ㄌㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
    },
    {
        "name": "路卡利歐",
        "zhuyin": [
            "ㄌㄨˋ",
            "ㄑㄧㄚˇ",
            "ㄌㄧˋ",
            "ㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
    },
    {
        "name": "沙河馬",
        "zhuyin": [
            "ㄕㄚ",
            "ㄏㄜˊ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
    },
    {
        "name": "河馬獸",
        "zhuyin": [
            "ㄏㄜˊ",
            "ㄇㄚˇ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
    },
    {
        "name": "鉗尾蠍",
        "zhuyin": [
            "ㄑㄧㄢˊ",
            "ㄨㄟˇ",
            "ㄒㄧㄝ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
    },
    {
        "name": "龍王蠍",
        "zhuyin": [
            "ㄌㄨㄥˊ",
            "ㄨㄤˊ",
            "ㄒㄧㄝ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
    },
    {
        "name": "不良蛙",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄌㄧㄤˊ",
            "ㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
    },
    {
        "name": "毒骷蛙",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄎㄨ",
            "ㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
    },
    {
        "name": "尖牙籠",
        "zhuyin": [
            "ㄐㄧㄢ",
            "ㄧㄚˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
    },
    {
        "name": "螢光魚",
        "zhuyin": [
            "ㄧㄥˊ",
            "ㄍㄨㄤ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
    },
    {
        "name": "霓虹魚",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄏㄨㄥˊ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
    },
    {
        "name": "小球飛魚",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄑㄧㄡˊ",
            "ㄈㄟ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
    },
    {
        "name": "雪笠怪",
        "zhuyin": [
            "ㄒㄩㄝˇ",
            "ㄌㄧˋ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
    },
    {
        "name": "暴雪王",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄒㄩㄝˇ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
    },
    {
        "name": "瑪狃拉",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄋㄧㄡˇ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
    },
    {
        "name": "自爆磁怪",
        "zhuyin": [
            "ㄗˋ",
            "ㄅㄠˋ",
            "ㄘˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
    },
    {
        "name": "大舌舔",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄕㄜˊ",
            "ㄊㄧㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
    },
    {
        "name": "超甲狂犀",
        "zhuyin": [
            "ㄔㄠ",
            "ㄐㄧㄚˇ",
            "ㄎㄨㄤˊ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
    },
    {
        "name": "巨蔓藤",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄇㄢˋ",
            "ㄊㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
    },
    {
        "name": "電擊魔獸",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄐㄧ",
            "ㄇㄛˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
    },
    {
        "name": "鴨嘴炎獸",
        "zhuyin": [
            "ㄧㄚ",
            "ㄗㄨㄟˇ",
            "ㄧㄢˊ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
    },
    {
        "name": "波克基斯",
        "zhuyin": [
            "ㄅㄛ",
            "ㄎㄜˋ",
            "ㄐㄧ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
    },
    {
        "name": "遠古巨蜓",
        "zhuyin": [
            "ㄩㄢˇ",
            "ㄍㄨˇ",
            "ㄐㄩˋ",
            "ㄊㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
    },
    {
        "name": "葉伊布",
        "zhuyin": [
            "ㄧㄝˋ",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
    },
    {
        "name": "冰伊布",
        "zhuyin": [
            "ㄅㄧㄥ",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
    },
    {
        "name": "天蠍王",
        "zhuyin": [
            "ㄊㄧㄢ",
            "ㄒㄧㄝ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
    },
    {
        "name": "象牙豬",
        "zhuyin": [
            "ㄒㄧㄤˋ",
            "ㄧㄚˊ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
    },
    {
        "name": "多邊獸Ｚ",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄅㄧㄢ",
            "ㄕㄡˋ",
            "Ｚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
    },
    {
        "name": "艾路雷朵",
        "zhuyin": [
            "ㄞˋ",
            "ㄌㄨˋ",
            "ㄌㄟˊ",
            "ㄉㄨㄛˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
    },
    {
        "name": "大朝北鼻",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄔㄠˊ",
            "ㄅㄟˇ",
            "ㄅㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
    },
    {
        "name": "黑夜魔靈",
        "zhuyin": [
            "ㄏㄟ",
            "ㄧㄝˋ",
            "ㄇㄛˊ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
    },
    {
        "name": "雪妖女",
        "zhuyin": [
            "ㄒㄩㄝˇ",
            "ㄧㄠ",
            "ㄋㄩˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
    },
    {
        "name": "洛托姆",
        "zhuyin": [
            "ㄌㄨㄛˋ",
            "ㄊㄨㄛ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
    },
    {
        "name": "由克希",
        "zhuyin": [
            "ㄧㄡˊ",
            "ㄎㄜˋ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
    },
    {
        "name": "艾姆利多",
        "zhuyin": [
            "ㄞˋ",
            "ㄇㄨˇ",
            "ㄌㄧˋ",
            "ㄉㄨㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
    },
    {
        "name": "亞克諾姆",
        "zhuyin": [
            "ㄧㄚˋ",
            "ㄎㄜˋ",
            "ㄋㄨㄛˋ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
    },
    {
        "name": "帝牙盧卡",
        "zhuyin": [
            "ㄉㄧˋ",
            "ㄧㄚˊ",
            "ㄌㄨˊ",
            "ㄎㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
    },
    {
        "name": "帕路奇亞",
        "zhuyin": [
            "ㄆㄚˋ",
            "ㄌㄨˋ",
            "ㄑㄧˊ",
            "ㄧㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
    },
    {
        "name": "席多藍恩",
        "zhuyin": [
            "ㄒㄧˊ",
            "ㄉㄨㄛ",
            "ㄌㄢˊ",
            "ㄣ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
    },
    {
        "name": "雷吉奇卡斯",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄐㄧˊ",
            "ㄑㄧˊ",
            "ㄎㄚˇ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
    },
    {
        "name": "騎拉帝納",
        "zhuyin": [
            "ㄑㄧˊ",
            "ㄌㄚ",
            "ㄉㄧˋ",
            "ㄋㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
    },
    {
        "name": "克雷色利亞",
        "zhuyin": [
            "ㄎㄜˋ",
            "ㄌㄟˊ",
            "ㄙㄜˋ",
            "ㄌㄧˋ",
            "ㄧㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
    },
    {
        "name": "霏歐納",
        "zhuyin": [
            "ㄈㄟ",
            "ㄡ",
            "ㄋㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
    },
    {
        "name": "瑪納霏",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄋㄚˋ",
            "ㄈㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
    },
    {
        "name": "達克萊伊",
        "zhuyin": [
            "ㄉㄚˊ",
            "ㄎㄜˋ",
            "ㄌㄞˊ",
            "ㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
    },
    {
        "name": "謝米",
        "zhuyin": [
            "ㄒㄧㄝˋ",
            "ㄇㄧˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
    },
    {
        "name": "阿爾宙斯",
        "zhuyin": [
            "ㄚ",
            "ㄦˇ",
            "ㄓㄡˋ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
    },
    {
        "name": "比克提尼",
        "zhuyin": [
            "ㄅㄧˇ",
            "ㄎㄜˋ",
            "ㄊㄧˊ",
            "ㄋㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
    },
    {
        "name": "藤藤蛇",
        "zhuyin": [
            "ㄊㄥˊ",
            "ㄊㄥˊ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
    },
    {
        "name": "青藤蛇",
        "zhuyin": [
            "ㄑㄧㄥ",
            "ㄊㄥˊ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
    },
    {
        "name": "君主蛇",
        "zhuyin": [
            "ㄐㄩㄣ",
            "ㄓㄨˇ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
    },
    {
        "name": "暖暖豬",
        "zhuyin": [
            "ㄋㄨㄢˇ",
            "ㄋㄨㄢˇ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
    },
    {
        "name": "炒炒豬",
        "zhuyin": [
            "ㄔㄠˇ",
            "ㄔㄠˇ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
    },
    {
        "name": "炎武王",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄨˇ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
    },
    {
        "name": "水水獺",
        "zhuyin": [
            "ㄕㄨㄟˇ",
            "ㄕㄨㄟˇ",
            "ㄊㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
    },
    {
        "name": "雙刃丸",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄖㄣˋ",
            "ㄨㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
    },
    {
        "name": "大劍鬼",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄐㄧㄢˋ",
            "ㄍㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
    },
    {
        "name": "探探鼠",
        "zhuyin": [
            "ㄊㄢˋ",
            "ㄊㄢˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
    },
    {
        "name": "步哨鼠",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄕㄠˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
    },
    {
        "name": "小約克",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄩㄝ",
            "ㄎㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
    },
    {
        "name": "哈約克",
        "zhuyin": [
            "ㄏㄚ",
            "ㄩㄝ",
            "ㄎㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
    },
    {
        "name": "長毛狗",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄇㄠˊ",
            "ㄍㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
    },
    {
        "name": "扒手貓",
        "zhuyin": [
            "ㄆㄚˊ",
            "ㄕㄡˇ",
            "ㄇㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
    },
    {
        "name": "酷豹",
        "zhuyin": [
            "ㄎㄨˋ",
            "ㄅㄠˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
    },
    {
        "name": "花椰猴",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄧㄝ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
    },
    {
        "name": "花椰猿",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄧㄝ",
            "ㄩㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
    },
    {
        "name": "爆香猴",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄒㄧㄤ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
    },
    {
        "name": "爆香猿",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄒㄧㄤ",
            "ㄩㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
    },
    {
        "name": "冷水猴",
        "zhuyin": [
            "ㄌㄥˇ",
            "ㄕㄨㄟˇ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
    },
    {
        "name": "冷水猿",
        "zhuyin": [
            "ㄌㄥˇ",
            "ㄕㄨㄟˇ",
            "ㄩㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
    },
    {
        "name": "食夢夢",
        "zhuyin": [
            "ㄕˊ",
            "ㄇㄥˋ",
            "ㄇㄥˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
    },
    {
        "name": "夢夢蝕",
        "zhuyin": [
            "ㄇㄥˋ",
            "ㄇㄥˋ",
            "ㄕˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
    },
    {
        "name": "豆豆鴿",
        "zhuyin": [
            "ㄉㄡˋ",
            "ㄉㄡˋ",
            "ㄍㄜ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
    },
    {
        "name": "咕咕鴿",
        "zhuyin": [
            "ㄍㄨ",
            "ㄍㄨ",
            "ㄍㄜ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
    },
    {
        "name": "高傲雉雞",
        "zhuyin": [
            "ㄍㄠ",
            "ㄠˋ",
            "ㄓˋ",
            "ㄐㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
    },
    {
        "name": "斑斑馬",
        "zhuyin": [
            "ㄅㄢ",
            "ㄅㄢ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
    },
    {
        "name": "雷電斑馬",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄉㄧㄢˋ",
            "ㄅㄢ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
    },
    {
        "name": "石丸子",
        "zhuyin": [
            "ㄕˊ",
            "ㄨㄢˊ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
    },
    {
        "name": "地幔岩",
        "zhuyin": [
            "ㄉㄧˋ",
            "ㄇㄢˋ",
            "ㄧㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
    },
    {
        "name": "龐岩怪",
        "zhuyin": [
            "ㄆㄤˊ",
            "ㄧㄢˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
    },
    {
        "name": "滾滾蝙蝠",
        "zhuyin": [
            "ㄍㄨㄣˇ",
            "ㄍㄨㄣˇ",
            "ㄅㄧㄢ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
    },
    {
        "name": "心蝙蝠",
        "zhuyin": [
            "ㄒㄧㄣ",
            "ㄅㄧㄢ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
    },
    {
        "name": "螺釘地鼠",
        "zhuyin": [
            "ㄌㄨㄛˊ",
            "ㄉㄧㄥ",
            "ㄉㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
    },
    {
        "name": "龍頭地鼠",
        "zhuyin": [
            "ㄌㄨㄥˊ",
            "ㄊㄡˊ",
            "ㄉㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
    },
    {
        "name": "差不多娃娃",
        "zhuyin": [
            "ㄔㄚˋ",
            "ㄅㄨ˙",
            "ㄉㄨㄛ",
            "ㄨㄚˊ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
    },
    {
        "name": "搬運小匠",
        "zhuyin": [
            "ㄅㄢ",
            "ㄩㄣˋ",
            "ㄒㄧㄠˇ",
            "ㄐㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
    },
    {
        "name": "鐵骨土人",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄍㄨˇ",
            "ㄊㄨˇ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
    },
    {
        "name": "修建老匠",
        "zhuyin": [
            "ㄒㄧㄡ",
            "ㄐㄧㄢˋ",
            "ㄌㄠˇ",
            "ㄐㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
    },
    {
        "name": "圓蝌蚪",
        "zhuyin": [
            "ㄩㄢˊ",
            "ㄎㄜ",
            "ㄉㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
    },
    {
        "name": "藍蟾蜍",
        "zhuyin": [
            "ㄌㄢˊ",
            "ㄔㄢˊ",
            "ㄔㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
    },
    {
        "name": "蟾蜍王",
        "zhuyin": [
            "ㄔㄢˊ",
            "ㄔㄨˊ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
    },
    {
        "name": "投摔鬼",
        "zhuyin": [
            "ㄊㄡˊ",
            "ㄕㄨㄞ",
            "ㄍㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
    },
    {
        "name": "打擊鬼",
        "zhuyin": [
            "ㄉㄚˇ",
            "ㄐㄧ",
            "ㄍㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
    },
    {
        "name": "蟲寶包",
        "zhuyin": [
            "ㄔㄨㄥˊ",
            "ㄅㄠˇ",
            "ㄅㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
    },
    {
        "name": "寶包繭",
        "zhuyin": [
            "ㄅㄠˇ",
            "ㄅㄠ",
            "ㄐㄧㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
    },
    {
        "name": "保母蟲",
        "zhuyin": [
            "ㄅㄠˇ",
            "ㄇㄨˇ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
    },
    {
        "name": "百足蜈蚣",
        "zhuyin": [
            "ㄅㄞˇ",
            "ㄗㄨˊ",
            "ㄨˊ",
            "ㄍㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
    },
    {
        "name": "車輪毬",
        "zhuyin": [
            "ㄔㄜ",
            "ㄌㄨㄣˊ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
    },
    {
        "name": "蜈蚣王",
        "zhuyin": [
            "ㄨˊ",
            "ㄍㄨㄥ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
    },
    {
        "name": "木棉球",
        "zhuyin": [
            "ㄇㄨˋ",
            "ㄇㄧㄢˊ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
    },
    {
        "name": "風妖精",
        "zhuyin": [
            "ㄈㄥ",
            "ㄧㄠ",
            "ㄐㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
    },
    {
        "name": "百合根娃娃",
        "zhuyin": [
            "ㄅㄞˇ",
            "ㄏㄜˊ",
            "ㄍㄣ",
            "ㄨㄚˊ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
    },
    {
        "name": "裙兒小姐",
        "zhuyin": [
            "ㄑㄩㄣˊ",
            "ㄦˊ",
            "ㄒㄧㄠˇ",
            "ㄐㄧㄝˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
    },
    {
        "name": "野蠻鱸魚",
        "zhuyin": [
            "ㄧㄝˇ",
            "ㄇㄢˊ",
            "ㄌㄨˊ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
    },
    {
        "name": "黑眼鱷",
        "zhuyin": [
            "ㄏㄟ",
            "ㄧㄢˇ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
    },
    {
        "name": "混混鱷",
        "zhuyin": [
            "ㄏㄨㄣˋ",
            "ㄏㄨㄣˋ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
    },
    {
        "name": "流氓鱷",
        "zhuyin": [
            "ㄌㄧㄡˊ",
            "ㄇㄤˊ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
    },
    {
        "name": "火紅不倒翁",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄏㄨㄥˊ",
            "ㄅㄨˋ",
            "ㄉㄠˇ",
            "ㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
    },
    {
        "name": "達摩狒狒",
        "zhuyin": [
            "ㄉㄚˊ",
            "ㄇㄛˊ",
            "ㄈㄟˋ",
            "ㄈㄟˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
    },
    {
        "name": "沙鈴仙人掌",
        "zhuyin": [
            "ㄕㄚ",
            "ㄌㄧㄥˊ",
            "ㄒㄧㄢ",
            "ㄖㄣˊ",
            "ㄓㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
    },
    {
        "name": "石居蟹",
        "zhuyin": [
            "ㄕˊ",
            "ㄐㄩ",
            "ㄒㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
    },
    {
        "name": "岩殿居蟹",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄉㄧㄢˋ",
            "ㄐㄩ",
            "ㄒㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
    },
    {
        "name": "滑滑小子",
        "zhuyin": [
            "ㄏㄨㄚˊ",
            "ㄏㄨㄚˊ",
            "ㄒㄧㄠˇ",
            "ㄗ˙"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
    },
    {
        "name": "頭巾混混",
        "zhuyin": [
            "ㄊㄡˊ",
            "ㄐㄧㄣ",
            "ㄏㄨㄣˋ",
            "ㄏㄨㄣˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
    },
    {
        "name": "象徵鳥",
        "zhuyin": [
            "ㄒㄧㄤˋ",
            "ㄓㄥ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
    },
    {
        "name": "哭哭面具",
        "zhuyin": [
            "ㄎㄨ",
            "ㄎㄨ",
            "ㄇㄧㄢˋ",
            "ㄐㄩˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
    },
    {
        "name": "死神棺",
        "zhuyin": [
            "ㄙˇ",
            "ㄕㄣˊ",
            "ㄍㄨㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
    },
    {
        "name": "原蓋海龜",
        "zhuyin": [
            "ㄩㄢˊ",
            "ㄍㄞˋ",
            "ㄏㄞˇ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
    },
    {
        "name": "肋骨海龜",
        "zhuyin": [
            "ㄌㄟˋ",
            "ㄍㄨˇ",
            "ㄏㄞˇ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
    },
    {
        "name": "始祖小鳥",
        "zhuyin": [
            "ㄕˇ",
            "ㄗㄨˇ",
            "ㄒㄧㄠˇ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
    },
    {
        "name": "始祖大鳥",
        "zhuyin": [
            "ㄕˇ",
            "ㄗㄨˇ",
            "ㄉㄚˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
    },
    {
        "name": "破破袋",
        "zhuyin": [
            "ㄆㄛˋ",
            "ㄆㄛˋ",
            "ㄉㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
    },
    {
        "name": "灰塵山",
        "zhuyin": [
            "ㄏㄨㄟ",
            "ㄔㄣˊ",
            "ㄕㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
    },
    {
        "name": "索羅亞",
        "zhuyin": [
            "ㄙㄨㄛˇ",
            "ㄌㄨㄛˊ",
            "ㄧㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
    },
    {
        "name": "索羅亞克",
        "zhuyin": [
            "ㄙㄨㄛˇ",
            "ㄌㄨㄛˊ",
            "ㄧㄚˋ",
            "ㄎㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
    },
    {
        "name": "泡沫栗鼠",
        "zhuyin": [
            "ㄆㄠˋ",
            "ㄇㄛˋ",
            "ㄌㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
    },
    {
        "name": "奇諾栗鼠",
        "zhuyin": [
            "ㄑㄧˊ",
            "ㄋㄨㄛˋ",
            "ㄌㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
    },
    {
        "name": "哥德寶寶",
        "zhuyin": [
            "ㄍㄜ",
            "ㄉㄜˊ",
            "ㄅㄠˇ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
    },
    {
        "name": "哥德小童",
        "zhuyin": [
            "ㄍㄜ",
            "ㄉㄜˊ",
            "ㄒㄧㄠˇ",
            "ㄊㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
    },
    {
        "name": "哥德小姐",
        "zhuyin": [
            "ㄍㄜ",
            "ㄉㄜˊ",
            "ㄒㄧㄠˇ",
            "ㄐㄧㄝˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
    },
    {
        "name": "單卵細胞球",
        "zhuyin": [
            "ㄉㄢ",
            "ㄌㄨㄢˇ",
            "ㄒㄧˋ",
            "ㄅㄠ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
    },
    {
        "name": "雙卵細胞球",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄌㄨㄢˇ",
            "ㄒㄧˋ",
            "ㄅㄠ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
    },
    {
        "name": "人造細胞卵",
        "zhuyin": [
            "ㄖㄣˊ",
            "ㄗㄠˋ",
            "ㄒㄧˋ",
            "ㄅㄠ",
            "ㄌㄨㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
    },
    {
        "name": "鴨寶寶",
        "zhuyin": [
            "ㄧㄚ",
            "ㄅㄠˇ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
    },
    {
        "name": "舞天鵝",
        "zhuyin": [
            "ㄨˇ",
            "ㄊㄧㄢ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
    },
    {
        "name": "迷你冰",
        "zhuyin": [
            "ㄇㄧˊ",
            "ㄋㄧˇ",
            "ㄅㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
    },
    {
        "name": "多多冰",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄉㄨㄛ",
            "ㄅㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
    },
    {
        "name": "雙倍多多冰",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄅㄟˋ",
            "ㄉㄨㄛ",
            "ㄉㄨㄛ",
            "ㄅㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
    },
    {
        "name": "四季鹿",
        "zhuyin": [
            "ㄙˋ",
            "ㄐㄧˋ",
            "ㄌㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
    },
    {
        "name": "萌芽鹿",
        "zhuyin": [
            "ㄇㄥˊ",
            "ㄧㄚˊ",
            "ㄌㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
    },
    {
        "name": "電飛鼠",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄈㄟ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
    },
    {
        "name": "蓋蓋蟲",
        "zhuyin": [
            "ㄍㄞˋ",
            "ㄍㄞˋ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
    },
    {
        "name": "騎士蝸牛",
        "zhuyin": [
            "ㄑㄧˊ",
            "ㄕˋ",
            "ㄨㄛ",
            "ㄋㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
    },
    {
        "name": "哎呀球菇",
        "zhuyin": [
            "ㄞ",
            "ㄧㄚ",
            "ㄑㄧㄡˊ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
    },
    {
        "name": "敗露球菇",
        "zhuyin": [
            "ㄅㄞˋ",
            "ㄌㄨˋ",
            "ㄑㄧㄡˊ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
    },
    {
        "name": "輕飄飄",
        "zhuyin": [
            "ㄑㄧㄥ",
            "ㄆㄧㄠ",
            "ㄆㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
    },
    {
        "name": "胖嘟嘟",
        "zhuyin": [
            "ㄆㄤˋ",
            "ㄉㄨ",
            "ㄉㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
    },
    {
        "name": "保母曼波",
        "zhuyin": [
            "ㄅㄠˇ",
            "ㄇㄨˇ",
            "ㄇㄢˋ",
            "ㄅㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
    },
    {
        "name": "電電蟲",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄉㄧㄢˋ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
    },
    {
        "name": "電蜘蛛",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄓ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
    },
    {
        "name": "種子鐵球",
        "zhuyin": [
            "ㄓㄨㄥˇ",
            "ㄗ˙",
            "ㄊㄧㄝˇ",
            "ㄑㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
    },
    {
        "name": "堅果啞鈴",
        "zhuyin": [
            "ㄐㄧㄢ",
            "ㄍㄨㄛˇ",
            "ㄧㄚˇ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
    },
    {
        "name": "齒輪兒",
        "zhuyin": [
            "ㄔˇ",
            "ㄌㄨㄣˊ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
    },
    {
        "name": "齒輪組",
        "zhuyin": [
            "ㄔˇ",
            "ㄌㄨㄣˊ",
            "ㄗㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
    },
    {
        "name": "齒輪怪",
        "zhuyin": [
            "ㄔˇ",
            "ㄌㄨㄣˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png"
    },
    {
        "name": "麻麻小魚",
        "zhuyin": [
            "ㄇㄚˊ",
            "ㄇㄚˊ",
            "ㄒㄧㄠˇ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png"
    },
    {
        "name": "麻麻鰻",
        "zhuyin": [
            "ㄇㄚˊ",
            "ㄇㄚˊ",
            "ㄇㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png"
    },
    {
        "name": "麻麻鰻魚王",
        "zhuyin": [
            "ㄇㄚˊ",
            "ㄇㄚˊ",
            "ㄇㄢˊ",
            "ㄩˊ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png"
    },
    {
        "name": "小灰怪",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄏㄨㄟ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png"
    },
    {
        "name": "大宇怪",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄩˇ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png"
    },
    {
        "name": "燭光靈",
        "zhuyin": [
            "ㄓㄨˊ",
            "ㄍㄨㄤ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png"
    },
    {
        "name": "燈火幽靈",
        "zhuyin": [
            "ㄉㄥ",
            "ㄏㄨㄛˇ",
            "ㄧㄡ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png"
    },
    {
        "name": "水晶燈火靈",
        "zhuyin": [
            "ㄕㄨㄟˇ",
            "ㄐㄧㄥ",
            "ㄉㄥ",
            "ㄏㄨㄛˇ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png"
    },
    {
        "name": "牙牙",
        "zhuyin": [
            "ㄧㄚˊ",
            "ㄧㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png"
    },
    {
        "name": "斧牙龍",
        "zhuyin": [
            "ㄈㄨˇ",
            "ㄧㄚˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png"
    },
    {
        "name": "雙斧戰龍",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄈㄨˇ",
            "ㄓㄢˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png"
    },
    {
        "name": "噴嚏熊",
        "zhuyin": [
            "ㄆㄣ",
            "ㄊㄧˋ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png"
    },
    {
        "name": "凍原熊",
        "zhuyin": [
            "ㄉㄨㄥˋ",
            "ㄩㄢˊ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
    },
    {
        "name": "幾何雪花",
        "zhuyin": [
            "ㄐㄧˇ",
            "ㄏㄜˊ",
            "ㄒㄩㄝˇ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png"
    },
    {
        "name": "小嘴蝸",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄗㄨㄟˇ",
            "ㄨㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png"
    },
    {
        "name": "敏捷蟲",
        "zhuyin": [
            "ㄇㄧㄣˇ",
            "ㄐㄧㄝˊ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png"
    },
    {
        "name": "泥巴魚",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄅㄚ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png"
    },
    {
        "name": "功夫鼬",
        "zhuyin": [
            "ㄍㄨㄥ",
            "ㄈㄨ˙",
            "ㄧㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png"
    },
    {
        "name": "師父鼬",
        "zhuyin": [
            "ㄕ",
            "ㄈㄨˋ",
            "ㄧㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png"
    },
    {
        "name": "赤面龍",
        "zhuyin": [
            "ㄔˋ",
            "ㄇㄧㄢˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png"
    },
    {
        "name": "泥偶小人",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄡˇ",
            "ㄒㄧㄠˇ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png"
    },
    {
        "name": "泥偶巨人",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄡˇ",
            "ㄐㄩˋ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png"
    },
    {
        "name": "駒刀小兵",
        "zhuyin": [
            "ㄐㄩ",
            "ㄉㄠ",
            "ㄒㄧㄠˇ",
            "ㄅㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png"
    },
    {
        "name": "劈斬司令",
        "zhuyin": [
            "ㄆㄧ",
            "ㄓㄢˇ",
            "ㄙ",
            "ㄌㄧㄥˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png"
    },
    {
        "name": "爆炸頭水牛",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄓㄚˋ",
            "ㄊㄡˊ",
            "ㄕㄨㄟˇ",
            "ㄋㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png"
    },
    {
        "name": "毛頭小鷹",
        "zhuyin": [
            "ㄇㄠˊ",
            "ㄊㄡˊ",
            "ㄒㄧㄠˇ",
            "ㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png"
    },
    {
        "name": "勇士雄鷹",
        "zhuyin": [
            "ㄩㄥˇ",
            "ㄕˋ",
            "ㄒㄩㄥˊ",
            "ㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png"
    },
    {
        "name": "禿鷹丫頭",
        "zhuyin": [
            "ㄊㄨ",
            "ㄧㄥ",
            "ㄧㄚ",
            "ㄊㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png"
    },
    {
        "name": "禿鷹娜",
        "zhuyin": [
            "ㄊㄨ",
            "ㄧㄥ",
            "ㄋㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png"
    },
    {
        "name": "熔蟻獸",
        "zhuyin": [
            "ㄖㄨㄥˊ",
            "ㄧˇ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png"
    },
    {
        "name": "鐵蟻",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄧˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png"
    },
    {
        "name": "單首龍",
        "zhuyin": [
            "ㄉㄢ",
            "ㄕㄡˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png"
    },
    {
        "name": "雙首暴龍",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄕㄡˇ",
            "ㄅㄠˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png"
    },
    {
        "name": "三首惡龍",
        "zhuyin": [
            "ㄙㄢ",
            "ㄕㄡˇ",
            "ㄜˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png"
    },
    {
        "name": "燃燒蟲",
        "zhuyin": [
            "ㄖㄢˊ",
            "ㄕㄠ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png"
    },
    {
        "name": "火神蛾",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄕㄣˊ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png"
    },
    {
        "name": "勾帕路翁",
        "zhuyin": [
            "ㄍㄡ",
            "ㄆㄚˋ",
            "ㄌㄨˋ",
            "ㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png"
    },
    {
        "name": "代拉基翁",
        "zhuyin": [
            "ㄉㄞˋ",
            "ㄌㄚ",
            "ㄐㄧ",
            "ㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png"
    },
    {
        "name": "畢力吉翁",
        "zhuyin": [
            "ㄅㄧˋ",
            "ㄌㄧˋ",
            "ㄐㄧˊ",
            "ㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png"
    },
    {
        "name": "龍捲雲",
        "zhuyin": [
            "ㄌㄨㄥˊ",
            "ㄐㄩㄢˇ",
            "ㄩㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png"
    },
    {
        "name": "雷電雲",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄉㄧㄢˋ",
            "ㄩㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png"
    },
    {
        "name": "萊希拉姆",
        "zhuyin": [
            "ㄌㄞˊ",
            "ㄒㄧ",
            "ㄌㄚ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png"
    },
    {
        "name": "捷克羅姆",
        "zhuyin": [
            "ㄐㄧㄝˊ",
            "ㄎㄜˋ",
            "ㄌㄨㄛˊ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png"
    },
    {
        "name": "土地雲",
        "zhuyin": [
            "ㄊㄨˇ",
            "ㄉㄧˋ",
            "ㄩㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png"
    },
    {
        "name": "酋雷姆",
        "zhuyin": [
            "ㄑㄧㄡˊ",
            "ㄌㄟˊ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png"
    },
    {
        "name": "凱路迪歐",
        "zhuyin": [
            "ㄎㄞˇ",
            "ㄌㄨˋ",
            "ㄉㄧˊ",
            "ㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png"
    },
    {
        "name": "美洛耶塔",
        "zhuyin": [
            "ㄇㄟˇ",
            "ㄌㄨㄛˋ",
            "ㄧㄝˊ",
            "ㄊㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png"
    },
    {
        "name": "蓋諾賽克特",
        "zhuyin": [
            "ㄍㄞˋ",
            "ㄋㄨㄛˋ",
            "ㄙㄞˋ",
            "ㄎㄜˋ",
            "ㄊㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png"
    },
    {
        "name": "哈力栗",
        "zhuyin": [
            "ㄏㄚ",
            "ㄌㄧˋ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png"
    },
    {
        "name": "胖胖哈力",
        "zhuyin": [
            "ㄆㄤˋ",
            "ㄆㄤˋ",
            "ㄏㄚ",
            "ㄌㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png"
    },
    {
        "name": "布里卡隆",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄌㄧˇ",
            "ㄎㄚˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png"
    },
    {
        "name": "火狐狸",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄏㄨˊ",
            "ㄌㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png"
    },
    {
        "name": "長尾火狐",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄨㄟˇ",
            "ㄏㄨㄛˇ",
            "ㄏㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png"
    },
    {
        "name": "妖火紅狐",
        "zhuyin": [
            "ㄧㄠ",
            "ㄏㄨㄛˇ",
            "ㄏㄨㄥˊ",
            "ㄏㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png"
    },
    {
        "name": "呱呱泡蛙",
        "zhuyin": [
            "ㄍㄨ",
            "ㄍㄨ",
            "ㄆㄠˋ",
            "ㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png"
    },
    {
        "name": "呱頭蛙",
        "zhuyin": [
            "ㄍㄨ",
            "ㄊㄡˊ",
            "ㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png"
    },
    {
        "name": "甲賀忍蛙",
        "zhuyin": [
            "ㄐㄧㄚˇ",
            "ㄏㄜˋ",
            "ㄖㄣˇ",
            "ㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
    },
    {
        "name": "掘掘兔",
        "zhuyin": [
            "ㄐㄩㄝˊ",
            "ㄐㄩㄝˊ",
            "ㄊㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png"
    },
    {
        "name": "掘地兔",
        "zhuyin": [
            "ㄐㄩㄝˊ",
            "ㄉㄧˋ",
            "ㄊㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png"
    },
    {
        "name": "小箭雀",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄐㄧㄢˋ",
            "ㄑㄩㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png"
    },
    {
        "name": "火箭雀",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄐㄧㄢˋ",
            "ㄑㄩㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png"
    },
    {
        "name": "烈箭鷹",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄐㄧㄢˋ",
            "ㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png"
    },
    {
        "name": "粉蝶蟲",
        "zhuyin": [
            "ㄈㄣˇ",
            "ㄉㄧㄝˊ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png"
    },
    {
        "name": "粉蝶蛹",
        "zhuyin": [
            "ㄈㄣˇ",
            "ㄉㄧㄝˊ",
            "ㄩㄥˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png"
    },
    {
        "name": "彩粉蝶",
        "zhuyin": [
            "ㄘㄞˇ",
            "ㄈㄣˇ",
            "ㄉㄧㄝˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"
    },
    {
        "name": "小獅獅",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄕ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png"
    },
    {
        "name": "火炎獅",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄧㄢˊ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png"
    },
    {
        "name": "花蓓蓓",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄅㄟˋ",
            "ㄅㄟˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png"
    },
    {
        "name": "花葉蒂",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄧㄝˋ",
            "ㄉㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png"
    },
    {
        "name": "花潔夫人",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄐㄧㄝˊ",
            "ㄈㄨ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png"
    },
    {
        "name": "坐騎小羊",
        "zhuyin": [
            "ㄗㄨㄛˋ",
            "ㄑㄧˊ",
            "ㄒㄧㄠˇ",
            "ㄧㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png"
    },
    {
        "name": "坐騎山羊",
        "zhuyin": [
            "ㄗㄨㄛˋ",
            "ㄑㄧˊ",
            "ㄕㄢ",
            "ㄧㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png"
    },
    {
        "name": "頑皮熊貓",
        "zhuyin": [
            "ㄨㄢˊ",
            "ㄆㄧˊ",
            "ㄒㄩㄥˊ",
            "ㄇㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png"
    },
    {
        "name": "流氓熊貓",
        "zhuyin": [
            "ㄌㄧㄡˊ",
            "ㄇㄤˊ",
            "ㄒㄩㄥˊ",
            "ㄇㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png"
    },
    {
        "name": "多麗米亞",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄌㄧˋ",
            "ㄇㄧˇ",
            "ㄧㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png"
    },
    {
        "name": "妙喵",
        "zhuyin": [
            "ㄇㄧㄠˋ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png"
    },
    {
        "name": "超能妙喵",
        "zhuyin": [
            "ㄔㄠ",
            "ㄋㄥˊ",
            "ㄇㄧㄠˋ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png"
    },
    {
        "name": "獨劍鞘",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄐㄧㄢˋ",
            "ㄑㄧㄠˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png"
    },
    {
        "name": "雙劍鞘",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄐㄧㄢˋ",
            "ㄑㄧㄠˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png"
    },
    {
        "name": "堅盾劍怪",
        "zhuyin": [
            "ㄐㄧㄢ",
            "ㄉㄨㄣˋ",
            "ㄐㄧㄢˋ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
    },
    {
        "name": "粉香香",
        "zhuyin": [
            "ㄈㄣˇ",
            "ㄒㄧㄤ",
            "ㄒㄧㄤ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png"
    },
    {
        "name": "芳香精",
        "zhuyin": [
            "ㄈㄤ",
            "ㄒㄧㄤ",
            "ㄐㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png"
    },
    {
        "name": "綿綿泡芙",
        "zhuyin": [
            "ㄇㄧㄢˊ",
            "ㄇㄧㄢˊ",
            "ㄆㄠˋ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png"
    },
    {
        "name": "胖甜妮",
        "zhuyin": [
            "ㄆㄤˋ",
            "ㄊㄧㄢˊ",
            "ㄋㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png"
    },
    {
        "name": "好啦魷",
        "zhuyin": [
            "ㄏㄠˇ",
            "ㄌㄚ˙",
            "ㄧㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png"
    },
    {
        "name": "烏賊王",
        "zhuyin": [
            "ㄨ",
            "ㄗㄟˊ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png"
    },
    {
        "name": "龜腳腳",
        "zhuyin": [
            "ㄍㄨㄟ",
            "ㄐㄧㄠˇ",
            "ㄐㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png"
    },
    {
        "name": "龜足巨鎧",
        "zhuyin": [
            "ㄍㄨㄟ",
            "ㄗㄨˊ",
            "ㄐㄩˋ",
            "ㄎㄞˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png"
    },
    {
        "name": "垃垃藻",
        "zhuyin": [
            "ㄌㄚ",
            "ㄌㄚ",
            "ㄗㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png"
    },
    {
        "name": "毒藻龍",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄗㄠˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png"
    },
    {
        "name": "鐵臂槍蝦",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄅㄧˋ",
            "ㄑㄧㄤ",
            "ㄒㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png"
    },
    {
        "name": "鋼炮臂蝦",
        "zhuyin": [
            "ㄍㄤ",
            "ㄆㄠˋ",
            "ㄅㄧˋ",
            "ㄒㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png"
    },
    {
        "name": "傘電蜥",
        "zhuyin": [
            "ㄙㄢˇ",
            "ㄉㄧㄢˋ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png"
    },
    {
        "name": "光電傘蜥",
        "zhuyin": [
            "ㄍㄨㄤ",
            "ㄉㄧㄢˋ",
            "ㄙㄢˇ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png"
    },
    {
        "name": "寶寶暴龍",
        "zhuyin": [
            "ㄅㄠˇ",
            "ㄅㄠˇ",
            "ㄅㄠˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png"
    },
    {
        "name": "怪顎龍",
        "zhuyin": [
            "ㄍㄨㄞˋ",
            "ㄜˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png"
    },
    {
        "name": "冰雪龍",
        "zhuyin": [
            "ㄅㄧㄥ",
            "ㄒㄩㄝˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png"
    },
    {
        "name": "冰雪巨龍",
        "zhuyin": [
            "ㄅㄧㄥ",
            "ㄒㄩㄝˇ",
            "ㄐㄩˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png"
    },
    {
        "name": "仙子伊布",
        "zhuyin": [
            "ㄒㄧㄢ",
            "ㄗ˙",
            "ㄧ",
            "ㄅㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
    },
    {
        "name": "摔角鷹人",
        "zhuyin": [
            "ㄕㄨㄞ",
            "ㄐㄧㄠˇ",
            "ㄧㄥ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png"
    },
    {
        "name": "咚咚鼠",
        "zhuyin": [
            "ㄉㄨㄥ",
            "ㄉㄨㄥ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png"
    },
    {
        "name": "小碎鑽",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄙㄨㄟˋ",
            "ㄗㄨㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png"
    },
    {
        "name": "黏黏寶",
        "zhuyin": [
            "ㄋㄧㄢˊ",
            "ㄋㄧㄢˊ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png"
    },
    {
        "name": "黏美兒",
        "zhuyin": [
            "ㄋㄧㄢˊ",
            "ㄇㄟˇ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png"
    },
    {
        "name": "黏美龍",
        "zhuyin": [
            "ㄋㄧㄢˊ",
            "ㄇㄟˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png"
    },
    {
        "name": "鑰圈兒",
        "zhuyin": [
            "ㄧㄠˋ",
            "ㄑㄩㄢ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png"
    },
    {
        "name": "小木靈",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄇㄨˋ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png"
    },
    {
        "name": "朽木妖",
        "zhuyin": [
            "ㄒㄧㄡˇ",
            "ㄇㄨˋ",
            "ㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png"
    },
    {
        "name": "南瓜精",
        "zhuyin": [
            "ㄋㄢˊ",
            "ㄍㄨㄚ",
            "ㄐㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png"
    },
    {
        "name": "南瓜怪人",
        "zhuyin": [
            "ㄋㄢˊ",
            "ㄍㄨㄚ",
            "ㄍㄨㄞˋ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png"
    },
    {
        "name": "冰寶",
        "zhuyin": [
            "ㄅㄧㄥ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png"
    },
    {
        "name": "冰岩怪",
        "zhuyin": [
            "ㄅㄧㄥ",
            "ㄧㄢˊ",
            "ㄍㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png"
    },
    {
        "name": "嗡蝠",
        "zhuyin": [
            "ㄨㄥ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png"
    },
    {
        "name": "音波龍",
        "zhuyin": [
            "ㄧㄣ",
            "ㄅㄛ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png"
    },
    {
        "name": "哲爾尼亞斯",
        "zhuyin": [
            "ㄓㄜˊ",
            "ㄦˇ",
            "ㄋㄧˊ",
            "ㄧㄚˋ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png"
    },
    {
        "name": "伊裴爾塔爾",
        "zhuyin": [
            "ㄧ",
            "ㄆㄟˊ",
            "ㄦˇ",
            "ㄊㄚˇ",
            "ㄦˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png"
    },
    {
        "name": "基格爾德",
        "zhuyin": [
            "ㄐㄧ",
            "ㄍㄜˊ",
            "ㄦˇ",
            "ㄉㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png"
    },
    {
        "name": "蒂安希",
        "zhuyin": [
            "ㄉㄧˋ",
            "ㄢ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png"
    },
    {
        "name": "胡帕",
        "zhuyin": [
            "ㄏㄨˊ",
            "ㄆㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png"
    },
    {
        "name": "波爾凱尼恩",
        "zhuyin": [
            "ㄅㄛ",
            "ㄦˇ",
            "ㄎㄞˇ",
            "ㄋㄧˊ",
            "ㄣ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png"
    },
    {
        "name": "木木梟",
        "zhuyin": [
            "ㄇㄨˋ",
            "ㄇㄨˋ",
            "ㄒㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png"
    },
    {
        "name": "投羽梟",
        "zhuyin": [
            "ㄊㄡˊ",
            "ㄩˇ",
            "ㄒㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png"
    },
    {
        "name": "狙射樹梟",
        "zhuyin": [
            "ㄐㄩ",
            "ㄕㄜˋ",
            "ㄕㄨˋ",
            "ㄒㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png"
    },
    {
        "name": "火斑喵",
        "zhuyin": [
            "ㄏㄨㄛˇ",
            "ㄅㄢ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png"
    },
    {
        "name": "炎熱喵",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄖㄜˋ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png"
    },
    {
        "name": "熾焰咆哮虎",
        "zhuyin": [
            "ㄔˋ",
            "ㄧㄢˋ",
            "ㄆㄠˊ",
            "ㄒㄧㄠ",
            "ㄏㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png"
    },
    {
        "name": "球球海獅",
        "zhuyin": [
            "ㄑㄧㄡˊ",
            "ㄑㄧㄡˊ",
            "ㄏㄞˇ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png"
    },
    {
        "name": "花漾海獅",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄧㄤˋ",
            "ㄏㄞˇ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png"
    },
    {
        "name": "西獅海壬",
        "zhuyin": [
            "ㄒㄧ",
            "ㄕ",
            "ㄏㄞˇ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png"
    },
    {
        "name": "小篤兒",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄉㄨˇ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png"
    },
    {
        "name": "喇叭啄鳥",
        "zhuyin": [
            "ㄌㄚˇ",
            "ㄅㄚ",
            "ㄓㄨㄛˊ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png"
    },
    {
        "name": "銃嘴大鳥",
        "zhuyin": [
            "ㄔㄨㄥˋ",
            "ㄗㄨㄟˇ",
            "ㄉㄚˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png"
    },
    {
        "name": "貓鼬少",
        "zhuyin": [
            "ㄇㄠ",
            "ㄧㄡˋ",
            "ㄕㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png"
    },
    {
        "name": "貓鼬探長",
        "zhuyin": [
            "ㄇㄠ",
            "ㄧㄡˋ",
            "ㄊㄢˋ",
            "ㄓㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png"
    },
    {
        "name": "強顎雞母蟲",
        "zhuyin": [
            "ㄑㄧㄤˊ",
            "ㄜˋ",
            "ㄐㄧ",
            "ㄇㄨˇ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png"
    },
    {
        "name": "蟲電寶",
        "zhuyin": [
            "ㄔㄨㄥˊ",
            "ㄉㄧㄢˋ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png"
    },
    {
        "name": "鍬農炮蟲",
        "zhuyin": [
            "ㄑㄧㄠ",
            "ㄋㄨㄥˊ",
            "ㄆㄠˋ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png"
    },
    {
        "name": "好勝蟹",
        "zhuyin": [
            "ㄏㄠˇ",
            "ㄕㄥˋ",
            "ㄒㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png"
    },
    {
        "name": "好勝毛蟹",
        "zhuyin": [
            "ㄏㄠˇ",
            "ㄕㄥˋ",
            "ㄇㄠˊ",
            "ㄒㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png"
    },
    {
        "name": "花舞鳥",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄨˇ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png"
    },
    {
        "name": "萌虻",
        "zhuyin": [
            "ㄇㄥˊ",
            "ㄇㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png"
    },
    {
        "name": "蝶結萌虻",
        "zhuyin": [
            "ㄉㄧㄝˊ",
            "ㄐㄧㄝˊ",
            "ㄇㄥˊ",
            "ㄇㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png"
    },
    {
        "name": "岩狗狗",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄍㄡˇ",
            "ㄍㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png"
    },
    {
        "name": "鬃岩狼人",
        "zhuyin": [
            "ㄗㄨㄥ",
            "ㄧㄢˊ",
            "ㄌㄤˊ",
            "ㄖㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
    },
    {
        "name": "弱丁魚",
        "zhuyin": [
            "ㄖㄨㄛˋ",
            "ㄉㄧㄥ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png"
    },
    {
        "name": "好壞星",
        "zhuyin": [
            "ㄏㄠˇ",
            "ㄏㄨㄞˋ",
            "ㄒㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png"
    },
    {
        "name": "超壞星",
        "zhuyin": [
            "ㄔㄠ",
            "ㄏㄨㄞˋ",
            "ㄒㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png"
    },
    {
        "name": "泥驢仔",
        "zhuyin": [
            "ㄋㄧˊ",
            "ㄌㄩˊ",
            "ㄗㄞˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png"
    },
    {
        "name": "重泥挽馬",
        "zhuyin": [
            "ㄓㄨㄥˋ",
            "ㄋㄧˊ",
            "ㄨㄢˇ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png"
    },
    {
        "name": "滴蛛",
        "zhuyin": [
            "ㄉㄧ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png"
    },
    {
        "name": "滴蛛霸",
        "zhuyin": [
            "ㄉㄧ",
            "ㄓㄨ",
            "ㄅㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png"
    },
    {
        "name": "偽螳草",
        "zhuyin": [
            "ㄨㄟˇ",
            "ㄊㄤˊ",
            "ㄘㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png"
    },
    {
        "name": "蘭螳花",
        "zhuyin": [
            "ㄌㄢˊ",
            "ㄊㄤˊ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png"
    },
    {
        "name": "睡睡菇",
        "zhuyin": [
            "ㄕㄨㄟˋ",
            "ㄕㄨㄟˋ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png"
    },
    {
        "name": "燈罩夜菇",
        "zhuyin": [
            "ㄉㄥ",
            "ㄓㄠˋ",
            "ㄧㄝˋ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png"
    },
    {
        "name": "夜盜火蜥",
        "zhuyin": [
            "ㄧㄝˋ",
            "ㄉㄠˋ",
            "ㄏㄨㄛˇ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png"
    },
    {
        "name": "焰后蜥",
        "zhuyin": [
            "ㄧㄢˋ",
            "ㄏㄡˋ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png"
    },
    {
        "name": "童偶熊",
        "zhuyin": [
            "ㄊㄨㄥˊ",
            "ㄡˇ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png"
    },
    {
        "name": "穿著熊",
        "zhuyin": [
            "ㄔㄨㄢ",
            "ㄓㄨˋ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png"
    },
    {
        "name": "甜竹竹",
        "zhuyin": [
            "ㄊㄧㄢˊ",
            "ㄓㄨˊ",
            "ㄓㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png"
    },
    {
        "name": "甜舞妮",
        "zhuyin": [
            "ㄊㄧㄢˊ",
            "ㄨˇ",
            "ㄋㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png"
    },
    {
        "name": "甜冷美后",
        "zhuyin": [
            "ㄊㄧㄢˊ",
            "ㄌㄥˇ",
            "ㄇㄟˇ",
            "ㄏㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png"
    },
    {
        "name": "花療環環",
        "zhuyin": [
            "ㄏㄨㄚ",
            "ㄌㄧㄠˊ",
            "ㄏㄨㄢˊ",
            "ㄏㄨㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png"
    },
    {
        "name": "智揮猩",
        "zhuyin": [
            "ㄓˋ",
            "ㄏㄨㄟ",
            "ㄒㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png"
    },
    {
        "name": "投擲猴",
        "zhuyin": [
            "ㄊㄡˊ",
            "ㄓˋ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png"
    },
    {
        "name": "膽小蟲",
        "zhuyin": [
            "ㄉㄢˇ",
            "ㄒㄧㄠˇ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png"
    },
    {
        "name": "具甲武者",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄐㄧㄚˇ",
            "ㄨˇ",
            "ㄓㄜˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png"
    },
    {
        "name": "沙丘娃",
        "zhuyin": [
            "ㄕㄚ",
            "ㄑㄧㄡ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png"
    },
    {
        "name": "噬沙堡爺",
        "zhuyin": [
            "ㄕˋ",
            "ㄕㄚ",
            "ㄅㄠˇ",
            "ㄧㄝˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png"
    },
    {
        "name": "拳海參",
        "zhuyin": [
            "ㄑㄩㄢˊ",
            "ㄏㄞˇ",
            "ㄘㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png"
    },
    {
        "name": "屬性：空",
        "zhuyin": [
            "ㄕㄨˇ",
            "ㄒㄧㄥˋ",
            "：",
            "ㄎㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png"
    },
    {
        "name": "銀伴戰獸",
        "zhuyin": [
            "ㄧㄣˊ",
            "ㄅㄢˋ",
            "ㄓㄢˋ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png"
    },
    {
        "name": "小隕星",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄩㄣˇ",
            "ㄒㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png"
    },
    {
        "name": "樹枕尾熊",
        "zhuyin": [
            "ㄕㄨˋ",
            "ㄓㄣˇ",
            "ㄨㄟˇ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png"
    },
    {
        "name": "爆焰龜獸",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄧㄢˋ",
            "ㄍㄨㄟ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png"
    },
    {
        "name": "托戈德瑪爾",
        "zhuyin": [
            "ㄊㄨㄛ",
            "ㄍㄜ",
            "ㄉㄜˊ",
            "ㄇㄚˇ",
            "ㄦˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png"
    },
    {
        "name": "謎擬Ｑ",
        "zhuyin": [
            "ㄇㄧˊ",
            "ㄋㄧˇ",
            "Ｑ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
    },
    {
        "name": "磨牙彩皮魚",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄧㄚˊ",
            "ㄘㄞˇ",
            "ㄆㄧˊ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png"
    },
    {
        "name": "老翁龍",
        "zhuyin": [
            "ㄌㄠˇ",
            "ㄨㄥ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png"
    },
    {
        "name": "破破舵輪",
        "zhuyin": [
            "ㄆㄛˋ",
            "ㄆㄛˋ",
            "ㄉㄨㄛˋ",
            "ㄌㄨㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png"
    },
    {
        "name": "心鱗寶",
        "zhuyin": [
            "ㄒㄧㄣ",
            "ㄌㄧㄣˊ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png"
    },
    {
        "name": "鱗甲龍",
        "zhuyin": [
            "ㄌㄧㄣˊ",
            "ㄐㄧㄚˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png"
    },
    {
        "name": "杖尾鱗甲龍",
        "zhuyin": [
            "ㄓㄤˋ",
            "ㄨㄟˇ",
            "ㄌㄧㄣˊ",
            "ㄐㄧㄚˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png"
    },
    {
        "name": "卡璞・鳴鳴",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄆㄨˊ",
            "・",
            "ㄇㄧㄥˊ",
            "ㄇㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png"
    },
    {
        "name": "卡璞・蝶蝶",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄆㄨˊ",
            "・",
            "ㄉㄧㄝˊ",
            "ㄉㄧㄝˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png"
    },
    {
        "name": "卡璞・哞哞",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄆㄨˊ",
            "・",
            "ㄇㄡ",
            "ㄇㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png"
    },
    {
        "name": "卡璞・鰭鰭",
        "zhuyin": [
            "ㄎㄚˇ",
            "ㄆㄨˊ",
            "・",
            "ㄑㄧˊ",
            "ㄑㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png"
    },
    {
        "name": "科斯莫古",
        "zhuyin": [
            "ㄎㄜ",
            "ㄙ",
            "ㄇㄛˋ",
            "ㄍㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png"
    },
    {
        "name": "科斯莫姆",
        "zhuyin": [
            "ㄎㄜ",
            "ㄙ",
            "ㄇㄛˋ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png"
    },
    {
        "name": "索爾迦雷歐",
        "zhuyin": [
            "ㄙㄨㄛˇ",
            "ㄦˇ",
            "ㄐㄧㄚ",
            "ㄌㄟˊ",
            "ㄡ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png"
    },
    {
        "name": "露奈雅拉",
        "zhuyin": [
            "ㄌㄨˋ",
            "ㄋㄞˋ",
            "ㄧㄚˇ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png"
    },
    {
        "name": "虛吾伊德",
        "zhuyin": [
            "ㄒㄩ",
            "ㄨˊ",
            "ㄧ",
            "ㄉㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png"
    },
    {
        "name": "爆肌蚊",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄐㄧ",
            "ㄨㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png"
    },
    {
        "name": "費洛美螂",
        "zhuyin": [
            "ㄈㄟˋ",
            "ㄌㄨㄛˋ",
            "ㄇㄟˇ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png"
    },
    {
        "name": "電束木",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄕㄨˋ",
            "ㄇㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png"
    },
    {
        "name": "鐵火輝夜",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄏㄨㄛˇ",
            "ㄏㄨㄟ",
            "ㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png"
    },
    {
        "name": "紙御劍",
        "zhuyin": [
            "ㄓˇ",
            "ㄩˋ",
            "ㄐㄧㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png"
    },
    {
        "name": "惡食大王",
        "zhuyin": [
            "ㄜˋ",
            "ㄕˊ",
            "ㄉㄚˋ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png"
    },
    {
        "name": "奈克洛茲瑪",
        "zhuyin": [
            "ㄋㄞˋ",
            "ㄎㄜˋ",
            "ㄌㄨㄛˋ",
            "ㄗ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png"
    },
    {
        "name": "瑪機雅娜",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄐㄧ",
            "ㄧㄚˇ",
            "ㄋㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png"
    },
    {
        "name": "瑪夏多",
        "zhuyin": [
            "ㄇㄚˇ",
            "ㄒㄧㄚˋ",
            "ㄉㄨㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png"
    },
    {
        "name": "毒貝比",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄅㄟˋ",
            "ㄅㄧˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png"
    },
    {
        "name": "四顎針龍",
        "zhuyin": [
            "ㄙˋ",
            "ㄜˋ",
            "ㄓㄣ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png"
    },
    {
        "name": "壘磊石",
        "zhuyin": [
            "ㄌㄟˇ",
            "ㄌㄟˇ",
            "ㄕˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png"
    },
    {
        "name": "砰頭小丑",
        "zhuyin": [
            "ㄆㄥ",
            "ㄊㄡˊ",
            "ㄒㄧㄠˇ",
            "ㄔㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png"
    },
    {
        "name": "捷拉奧拉",
        "zhuyin": [
            "ㄐㄧㄝˊ",
            "ㄌㄚ",
            "ㄠˋ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png"
    },
    {
        "name": "美錄坦",
        "zhuyin": [
            "ㄇㄟˇ",
            "ㄌㄨˋ",
            "ㄊㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png"
    },
    {
        "name": "美錄梅塔",
        "zhuyin": [
            "ㄇㄟˇ",
            "ㄌㄨˋ",
            "ㄇㄟˊ",
            "ㄊㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png"
    },
    {
        "name": "敲音猴",
        "zhuyin": [
            "ㄑㄧㄠ",
            "ㄧㄣ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png"
    },
    {
        "name": "啪咚猴",
        "zhuyin": [
            "ㄆㄚ",
            "ㄉㄨㄥ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png"
    },
    {
        "name": "轟擂金剛猩",
        "zhuyin": [
            "ㄏㄨㄥ",
            "ㄌㄟˊ",
            "ㄐㄧㄣ",
            "ㄍㄤ",
            "ㄒㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png"
    },
    {
        "name": "炎兔兒",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄊㄨˋ",
            "ㄦˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png"
    },
    {
        "name": "騰蹴小將",
        "zhuyin": [
            "ㄊㄥˊ",
            "ㄘㄨˋ",
            "ㄒㄧㄠˇ",
            "ㄐㄧㄤ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png"
    },
    {
        "name": "閃焰王牌",
        "zhuyin": [
            "ㄕㄢˇ",
            "ㄧㄢˋ",
            "ㄨㄤˊ",
            "ㄆㄞˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png"
    },
    {
        "name": "淚眼蜥",
        "zhuyin": [
            "ㄌㄟˋ",
            "ㄧㄢˇ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png"
    },
    {
        "name": "變澀蜥",
        "zhuyin": [
            "ㄅㄧㄢˋ",
            "ㄙㄜˋ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png"
    },
    {
        "name": "千面避役",
        "zhuyin": [
            "ㄑㄧㄢ",
            "ㄇㄧㄢˋ",
            "ㄅㄧˋ",
            "ㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png"
    },
    {
        "name": "貪心栗鼠",
        "zhuyin": [
            "ㄊㄢ",
            "ㄒㄧㄣ",
            "ㄌㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png"
    },
    {
        "name": "藏飽栗鼠",
        "zhuyin": [
            "ㄘㄤˊ",
            "ㄅㄠˇ",
            "ㄌㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png"
    },
    {
        "name": "稚山雀",
        "zhuyin": [
            "ㄓˋ",
            "ㄕㄢ",
            "ㄑㄩㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png"
    },
    {
        "name": "藍鴉",
        "zhuyin": [
            "ㄌㄢˊ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png"
    },
    {
        "name": "鋼鎧鴉",
        "zhuyin": [
            "ㄍㄤ",
            "ㄎㄞˇ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png"
    },
    {
        "name": "索偵蟲",
        "zhuyin": [
            "ㄙㄨㄛˇ",
            "ㄓㄣ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png"
    },
    {
        "name": "天罩蟲",
        "zhuyin": [
            "ㄊㄧㄢ",
            "ㄓㄠˋ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png"
    },
    {
        "name": "以歐路普",
        "zhuyin": [
            "ㄧˇ",
            "ㄡ",
            "ㄌㄨˋ",
            "ㄆㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png"
    },
    {
        "name": "偷兒狐",
        "zhuyin": [
            "ㄊㄡ",
            "ㄦˊ",
            "ㄏㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png"
    },
    {
        "name": "狐大盜",
        "zhuyin": [
            "ㄏㄨˊ",
            "ㄉㄚˋ",
            "ㄉㄠˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png"
    },
    {
        "name": "幼棉棉",
        "zhuyin": [
            "ㄧㄡˋ",
            "ㄇㄧㄢˊ",
            "ㄇㄧㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png"
    },
    {
        "name": "白蓬蓬",
        "zhuyin": [
            "ㄅㄞˊ",
            "ㄆㄥˊ",
            "ㄆㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png"
    },
    {
        "name": "毛辮羊",
        "zhuyin": [
            "ㄇㄠˊ",
            "ㄅㄧㄢˋ",
            "ㄧㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png"
    },
    {
        "name": "毛毛角羊",
        "zhuyin": [
            "ㄇㄠˊ",
            "ㄇㄠˊ",
            "ㄐㄧㄠˇ",
            "ㄧㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png"
    },
    {
        "name": "咬咬龜",
        "zhuyin": [
            "ㄧㄠˇ",
            "ㄧㄠˇ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png"
    },
    {
        "name": "暴噬龜",
        "zhuyin": [
            "ㄅㄠˋ",
            "ㄕˋ",
            "ㄍㄨㄟ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png"
    },
    {
        "name": "來電汪",
        "zhuyin": [
            "ㄌㄞˊ",
            "ㄉㄧㄢˋ",
            "ㄨㄤ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png"
    },
    {
        "name": "逐電犬",
        "zhuyin": [
            "ㄓㄨˊ",
            "ㄉㄧㄢˋ",
            "ㄑㄩㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png"
    },
    {
        "name": "小炭仔",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄊㄢˋ",
            "ㄗㄞˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png"
    },
    {
        "name": "大炭車",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄊㄢˋ",
            "ㄔㄜ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png"
    },
    {
        "name": "巨炭山",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄊㄢˋ",
            "ㄕㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png"
    },
    {
        "name": "啃果蟲",
        "zhuyin": [
            "ㄎㄣˇ",
            "ㄍㄨㄛˇ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png"
    },
    {
        "name": "蘋裹龍",
        "zhuyin": [
            "ㄆㄧㄥˊ",
            "ㄍㄨㄛˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png"
    },
    {
        "name": "豐蜜龍",
        "zhuyin": [
            "ㄈㄥ",
            "ㄇㄧˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png"
    },
    {
        "name": "沙包蛇",
        "zhuyin": [
            "ㄕㄚ",
            "ㄅㄠ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png"
    },
    {
        "name": "沙螺蟒",
        "zhuyin": [
            "ㄕㄚ",
            "ㄌㄨㄛˊ",
            "ㄇㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png"
    },
    {
        "name": "古月鳥",
        "zhuyin": [
            "ㄍㄨˇ",
            "ㄩㄝˋ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png"
    },
    {
        "name": "刺梭魚",
        "zhuyin": [
            "ㄘˋ",
            "ㄙㄨㄛ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png"
    },
    {
        "name": "戽斗尖梭",
        "zhuyin": [
            "ㄏㄨˋ",
            "ㄉㄡˇ",
            "ㄐㄧㄢ",
            "ㄙㄨㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png"
    },
    {
        "name": "毒電嬰",
        "zhuyin": [
            "ㄉㄨˊ",
            "ㄉㄧㄢˋ",
            "ㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png"
    },
    {
        "name": "顫弦蠑螈",
        "zhuyin": [
            "ㄔㄢˋ",
            "ㄒㄧㄢˊ",
            "ㄖㄨㄥˊ",
            "ㄩㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png"
    },
    {
        "name": "燒火蚣",
        "zhuyin": [
            "ㄕㄠ",
            "ㄏㄨㄛˇ",
            "ㄍㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png"
    },
    {
        "name": "焚焰蚣",
        "zhuyin": [
            "ㄈㄣˊ",
            "ㄧㄢˋ",
            "ㄍㄨㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png"
    },
    {
        "name": "拳拳蛸",
        "zhuyin": [
            "ㄑㄩㄢˊ",
            "ㄑㄩㄢˊ",
            "ㄕㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png"
    },
    {
        "name": "八爪武師",
        "zhuyin": [
            "ㄅㄚ",
            "ㄓㄠˇ",
            "ㄨˇ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png"
    },
    {
        "name": "來悲茶",
        "zhuyin": [
            "ㄌㄞˊ",
            "ㄅㄟ",
            "ㄔㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png"
    },
    {
        "name": "怖思壺",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄙ",
            "ㄏㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png"
    },
    {
        "name": "迷布莉姆",
        "zhuyin": [
            "ㄇㄧˊ",
            "ㄅㄨˋ",
            "ㄌㄧˋ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png"
    },
    {
        "name": "提布莉姆",
        "zhuyin": [
            "ㄊㄧˊ",
            "ㄅㄨˋ",
            "ㄌㄧˋ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png"
    },
    {
        "name": "布莉姆溫",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄌㄧˋ",
            "ㄇㄨˇ",
            "ㄨㄣ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png"
    },
    {
        "name": "搗蛋小妖",
        "zhuyin": [
            "ㄉㄠˇ",
            "ㄉㄢˋ",
            "ㄒㄧㄠˇ",
            "ㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png"
    },
    {
        "name": "詐唬魔",
        "zhuyin": [
            "ㄓㄚˋ",
            "ㄏㄨˇ",
            "ㄇㄛˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png"
    },
    {
        "name": "長毛巨魔",
        "zhuyin": [
            "ㄓㄤˇ",
            "ㄇㄠˊ",
            "ㄐㄩˋ",
            "ㄇㄛˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png"
    },
    {
        "name": "堵攔熊",
        "zhuyin": [
            "ㄉㄨˇ",
            "ㄌㄢˊ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png"
    },
    {
        "name": "喵頭目",
        "zhuyin": [
            "ㄇㄧㄠ",
            "ㄊㄡˊ",
            "ㄇㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png"
    },
    {
        "name": "魔靈珊瑚",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄌㄧㄥˊ",
            "ㄕㄢ",
            "ㄏㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png"
    },
    {
        "name": "蔥遊兵",
        "zhuyin": [
            "ㄘㄨㄥ",
            "ㄧㄡˊ",
            "ㄅㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png"
    },
    {
        "name": "踏冰人偶",
        "zhuyin": [
            "ㄊㄚˋ",
            "ㄅㄧㄥ",
            "ㄖㄣˊ",
            "ㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png"
    },
    {
        "name": "死神板",
        "zhuyin": [
            "ㄙˇ",
            "ㄕㄣˊ",
            "ㄅㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png"
    },
    {
        "name": "小仙奶",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄒㄧㄢ",
            "ㄋㄞˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png"
    },
    {
        "name": "霜奶仙",
        "zhuyin": [
            "ㄕㄨㄤ",
            "ㄋㄞˇ",
            "ㄒㄧㄢ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png"
    },
    {
        "name": "列陣兵",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄓㄣˋ",
            "ㄅㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png"
    },
    {
        "name": "啪嚓海膽",
        "zhuyin": [
            "ㄆㄚ",
            "ㄘㄚ",
            "ㄏㄞˇ",
            "ㄉㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png"
    },
    {
        "name": "雪吞蟲",
        "zhuyin": [
            "ㄒㄩㄝˇ",
            "ㄊㄨㄣ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png"
    },
    {
        "name": "雪絨蛾",
        "zhuyin": [
            "ㄒㄩㄝˇ",
            "ㄖㄨㄥˊ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png"
    },
    {
        "name": "巨石丁",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄕˊ",
            "ㄉㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png"
    },
    {
        "name": "冰砌鵝",
        "zhuyin": [
            "ㄅㄧㄥ",
            "ㄑㄧˋ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png"
    },
    {
        "name": "愛管侍",
        "zhuyin": [
            "ㄞˋ",
            "ㄍㄨㄢˇ",
            "ㄕˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png"
    },
    {
        "name": "莫魯貝可",
        "zhuyin": [
            "ㄇㄛˋ",
            "ㄌㄨˇ",
            "ㄅㄟˋ",
            "ㄎㄜˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png"
    },
    {
        "name": "銅象",
        "zhuyin": [
            "ㄊㄨㄥˊ",
            "ㄒㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png"
    },
    {
        "name": "大王銅象",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄨㄤˊ",
            "ㄊㄨㄥˊ",
            "ㄒㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png"
    },
    {
        "name": "雷鳥龍",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄋㄧㄠˇ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png"
    },
    {
        "name": "雷鳥海獸",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄋㄧㄠˇ",
            "ㄏㄞˇ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png"
    },
    {
        "name": "鰓魚龍",
        "zhuyin": [
            "ㄙㄞ",
            "ㄩˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png"
    },
    {
        "name": "鰓魚海獸",
        "zhuyin": [
            "ㄙㄞ",
            "ㄩˊ",
            "ㄏㄞˇ",
            "ㄕㄡˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png"
    },
    {
        "name": "鋁鋼龍",
        "zhuyin": [
            "ㄌㄩˇ",
            "ㄍㄤ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png"
    },
    {
        "name": "多龍梅西亞",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄌㄨㄥˊ",
            "ㄇㄟˊ",
            "ㄒㄧ",
            "ㄧㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png"
    },
    {
        "name": "多龍奇",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄌㄨㄥˊ",
            "ㄑㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png"
    },
    {
        "name": "多龍巴魯托",
        "zhuyin": [
            "ㄉㄨㄛ",
            "ㄌㄨㄥˊ",
            "ㄅㄚ",
            "ㄌㄨˇ",
            "ㄊㄨㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png"
    },
    {
        "name": "蒼響",
        "zhuyin": [
            "ㄘㄤ",
            "ㄒㄧㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png"
    },
    {
        "name": "藏瑪然特",
        "zhuyin": [
            "ㄘㄤˊ",
            "ㄇㄚˇ",
            "ㄖㄢˊ",
            "ㄊㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png"
    },
    {
        "name": "無極汰那",
        "zhuyin": [
            "ㄨˊ",
            "ㄐㄧˊ",
            "ㄊㄞˋ",
            "ㄋㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png"
    },
    {
        "name": "熊徒弟",
        "zhuyin": [
            "ㄒㄩㄥˊ",
            "ㄊㄨˊ",
            "ㄉㄧˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png"
    },
    {
        "name": "武道熊師",
        "zhuyin": [
            "ㄨˇ",
            "ㄉㄠˋ",
            "ㄒㄩㄥˊ",
            "ㄕ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png"
    },
    {
        "name": "薩戮德",
        "zhuyin": [
            "ㄙㄚˋ",
            "ㄌㄨˋ",
            "ㄉㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png"
    },
    {
        "name": "雷吉艾勒奇",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄐㄧˊ",
            "ㄞˋ",
            "ㄌㄟ",
            "ㄑㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png"
    },
    {
        "name": "雷吉鐸拉戈",
        "zhuyin": [
            "ㄌㄟˊ",
            "ㄐㄧˊ",
            "ㄉㄨㄛˊ",
            "ㄌㄚ",
            "ㄍㄜ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png"
    },
    {
        "name": "雪暴馬",
        "zhuyin": [
            "ㄒㄩㄝˇ",
            "ㄅㄠˋ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png"
    },
    {
        "name": "靈幽馬",
        "zhuyin": [
            "ㄌㄧㄥˊ",
            "ㄧㄡ",
            "ㄇㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png"
    },
    {
        "name": "蕾冠王",
        "zhuyin": [
            "ㄌㄟˇ",
            "ㄍㄨㄢ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png"
    },
    {
        "name": "詭角鹿",
        "zhuyin": [
            "ㄍㄨㄟˇ",
            "ㄐㄧㄠˇ",
            "ㄌㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png"
    },
    {
        "name": "劈斧螳螂",
        "zhuyin": [
            "ㄆㄧ",
            "ㄈㄨˇ",
            "ㄊㄤˊ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png"
    },
    {
        "name": "月月熊",
        "zhuyin": [
            "ㄩㄝˋ",
            "ㄩㄝˋ",
            "ㄒㄩㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png"
    },
    {
        "name": "幽尾玄魚",
        "zhuyin": [
            "ㄧㄡ",
            "ㄨㄟˇ",
            "ㄒㄩㄢˊ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png"
    },
    {
        "name": "大狃拉",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄋㄧㄡˇ",
            "ㄌㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png"
    },
    {
        "name": "萬針魚",
        "zhuyin": [
            "ㄨㄢˋ",
            "ㄓㄣ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png"
    },
    {
        "name": "眷戀雲",
        "zhuyin": [
            "ㄐㄩㄢˋ",
            "ㄌㄧㄢˋ",
            "ㄩㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png"
    },
    {
        "name": "新葉喵",
        "zhuyin": [
            "ㄒㄧㄣ",
            "ㄧㄝˋ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png"
    },
    {
        "name": "蒂蕾喵",
        "zhuyin": [
            "ㄉㄧˋ",
            "ㄌㄟˇ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png"
    },
    {
        "name": "魔幻假面喵",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄏㄨㄢˋ",
            "ㄐㄧㄚˇ",
            "ㄇㄧㄢˋ",
            "ㄇㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png"
    },
    {
        "name": "呆火鱷",
        "zhuyin": [
            "ㄉㄞ",
            "ㄏㄨㄛˇ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png"
    },
    {
        "name": "炙燙鱷",
        "zhuyin": [
            "ㄓˋ",
            "ㄊㄤˋ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png"
    },
    {
        "name": "骨紋巨聲鱷",
        "zhuyin": [
            "ㄍㄨˇ",
            "ㄨㄣˊ",
            "ㄐㄩˋ",
            "ㄕㄥ",
            "ㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png"
    },
    {
        "name": "潤水鴨",
        "zhuyin": [
            "ㄖㄨㄣˋ",
            "ㄕㄨㄟˇ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png"
    },
    {
        "name": "湧躍鴨",
        "zhuyin": [
            "ㄩㄥˇ",
            "ㄩㄝˋ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png"
    },
    {
        "name": "狂歡浪舞鴨",
        "zhuyin": [
            "ㄎㄨㄤˊ",
            "ㄏㄨㄢ",
            "ㄌㄤˋ",
            "ㄨˇ",
            "ㄧㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png"
    },
    {
        "name": "愛吃豚",
        "zhuyin": [
            "ㄞˋ",
            "ㄔ",
            "ㄊㄨㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png"
    },
    {
        "name": "飄香豚",
        "zhuyin": [
            "ㄆㄧㄠ",
            "ㄒㄧㄤ",
            "ㄊㄨㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png"
    },
    {
        "name": "團珠蛛",
        "zhuyin": [
            "ㄊㄨㄢˊ",
            "ㄓㄨ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png"
    },
    {
        "name": "操陷蛛",
        "zhuyin": [
            "ㄘㄠ",
            "ㄒㄧㄢˋ",
            "ㄓㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png"
    },
    {
        "name": "豆蟋蟀",
        "zhuyin": [
            "ㄉㄡˋ",
            "ㄒㄧ",
            "ㄕㄨㄞˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png"
    },
    {
        "name": "烈腿蝗",
        "zhuyin": [
            "ㄌㄧㄝˋ",
            "ㄊㄨㄟˇ",
            "ㄏㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png"
    },
    {
        "name": "布撥",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄅㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png"
    },
    {
        "name": "布土撥",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄊㄨˇ",
            "ㄅㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png"
    },
    {
        "name": "巴布土撥",
        "zhuyin": [
            "ㄅㄚ",
            "ㄅㄨˋ",
            "ㄊㄨˇ",
            "ㄅㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png"
    },
    {
        "name": "一對鼠",
        "zhuyin": [
            "ㄧ",
            "ㄉㄨㄟˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png"
    },
    {
        "name": "一家鼠",
        "zhuyin": [
            "ㄧ",
            "ㄐㄧㄚ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png"
    },
    {
        "name": "狗仔包",
        "zhuyin": [
            "ㄍㄡˇ",
            "ㄗㄞˇ",
            "ㄅㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png"
    },
    {
        "name": "麻花犬",
        "zhuyin": [
            "ㄇㄚˊ",
            "ㄏㄨㄚ",
            "ㄑㄩㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png"
    },
    {
        "name": "迷你芙",
        "zhuyin": [
            "ㄇㄧˊ",
            "ㄋㄧˇ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png"
    },
    {
        "name": "奧利紐",
        "zhuyin": [
            "ㄠˋ",
            "ㄌㄧˋ",
            "ㄋㄧㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png"
    },
    {
        "name": "奧利瓦",
        "zhuyin": [
            "ㄠˋ",
            "ㄌㄧˋ",
            "ㄨㄚˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png"
    },
    {
        "name": "怒鸚哥",
        "zhuyin": [
            "ㄋㄨˋ",
            "ㄧㄥ",
            "ㄍㄜ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png"
    },
    {
        "name": "鹽石寶",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄕˊ",
            "ㄅㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png"
    },
    {
        "name": "鹽石壘",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄕˊ",
            "ㄌㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png"
    },
    {
        "name": "鹽石巨靈",
        "zhuyin": [
            "ㄧㄢˊ",
            "ㄕˊ",
            "ㄐㄩˋ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png"
    },
    {
        "name": "炭小侍",
        "zhuyin": [
            "ㄊㄢˋ",
            "ㄒㄧㄠˇ",
            "ㄕˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png"
    },
    {
        "name": "紅蓮鎧騎",
        "zhuyin": [
            "ㄏㄨㄥˊ",
            "ㄌㄧㄢˊ",
            "ㄎㄞˇ",
            "ㄑㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png"
    },
    {
        "name": "蒼炎刃鬼",
        "zhuyin": [
            "ㄘㄤ",
            "ㄧㄢˊ",
            "ㄖㄣˋ",
            "ㄍㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png"
    },
    {
        "name": "光蚪仔",
        "zhuyin": [
            "ㄍㄨㄤ",
            "ㄉㄡˇ",
            "ㄗㄞˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png"
    },
    {
        "name": "電肚蛙",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄉㄨˋ",
            "ㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png"
    },
    {
        "name": "電海燕",
        "zhuyin": [
            "ㄉㄧㄢˋ",
            "ㄏㄞˇ",
            "ㄧㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png"
    },
    {
        "name": "大電海燕",
        "zhuyin": [
            "ㄉㄚˋ",
            "ㄉㄧㄢˋ",
            "ㄏㄞˇ",
            "ㄧㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png"
    },
    {
        "name": "偶叫獒",
        "zhuyin": [
            "ㄡˇ",
            "ㄐㄧㄠˋ",
            "ㄠˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png"
    },
    {
        "name": "獒教父",
        "zhuyin": [
            "ㄠˊ",
            "ㄐㄧㄠˋ",
            "ㄈㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png"
    },
    {
        "name": "滋汁鼴",
        "zhuyin": [
            "ㄗ",
            "ㄓ",
            "ㄧㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png"
    },
    {
        "name": "塗標客",
        "zhuyin": [
            "ㄊㄨˊ",
            "ㄅㄧㄠ",
            "ㄎㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png"
    },
    {
        "name": "納噬草",
        "zhuyin": [
            "ㄋㄚˋ",
            "ㄕˋ",
            "ㄘㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png"
    },
    {
        "name": "怖納噬草",
        "zhuyin": [
            "ㄅㄨˋ",
            "ㄋㄚˋ",
            "ㄕˋ",
            "ㄘㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png"
    },
    {
        "name": "原野水母",
        "zhuyin": [
            "ㄩㄢˊ",
            "ㄧㄝˇ",
            "ㄕㄨㄟˇ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png"
    },
    {
        "name": "陸地水母",
        "zhuyin": [
            "ㄌㄨˋ",
            "ㄉㄧˋ",
            "ㄕㄨㄟˇ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png"
    },
    {
        "name": "毛崖蟹",
        "zhuyin": [
            "ㄇㄠˊ",
            "ㄧㄚˊ",
            "ㄒㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png"
    },
    {
        "name": "熱辣娃",
        "zhuyin": [
            "ㄖㄜˋ",
            "ㄌㄚˋ",
            "ㄨㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png"
    },
    {
        "name": "狠辣椒",
        "zhuyin": [
            "ㄏㄣˇ",
            "ㄌㄚˋ",
            "ㄐㄧㄠ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png"
    },
    {
        "name": "蟲滾泥",
        "zhuyin": [
            "ㄔㄨㄥˊ",
            "ㄍㄨㄣˇ",
            "ㄋㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png"
    },
    {
        "name": "蟲甲聖",
        "zhuyin": [
            "ㄔㄨㄥˊ",
            "ㄐㄧㄚˇ",
            "ㄕㄥˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png"
    },
    {
        "name": "飄飄雛",
        "zhuyin": [
            "ㄆㄧㄠ",
            "ㄆㄧㄠ",
            "ㄔㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png"
    },
    {
        "name": "超能艷鴕",
        "zhuyin": [
            "ㄔㄠ",
            "ㄋㄥˊ",
            "ㄧㄢˋ",
            "ㄊㄨㄛˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png"
    },
    {
        "name": "小鍛匠",
        "zhuyin": [
            "ㄒㄧㄠˇ",
            "ㄉㄨㄢˋ",
            "ㄐㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png"
    },
    {
        "name": "巧鍛匠",
        "zhuyin": [
            "ㄑㄧㄠˇ",
            "ㄉㄨㄢˋ",
            "ㄐㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png"
    },
    {
        "name": "巨鍛匠",
        "zhuyin": [
            "ㄐㄩˋ",
            "ㄉㄨㄢˋ",
            "ㄐㄧㄤˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png"
    },
    {
        "name": "海地鼠",
        "zhuyin": [
            "ㄏㄞˇ",
            "ㄉㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png"
    },
    {
        "name": "三海地鼠",
        "zhuyin": [
            "ㄙㄢ",
            "ㄏㄞˇ",
            "ㄉㄧˋ",
            "ㄕㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png"
    },
    {
        "name": "下石鳥",
        "zhuyin": [
            "ㄒㄧㄚˋ",
            "ㄕˊ",
            "ㄋㄧㄠˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png"
    },
    {
        "name": "波普海豚",
        "zhuyin": [
            "ㄅㄛ",
            "ㄆㄨˇ",
            "ㄏㄞˇ",
            "ㄊㄨㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png"
    },
    {
        "name": "海豚俠",
        "zhuyin": [
            "ㄏㄞˇ",
            "ㄊㄨㄣˊ",
            "ㄒㄧㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png"
    },
    {
        "name": "噗隆隆",
        "zhuyin": [
            "ㄆㄨ",
            "ㄌㄨㄥˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png"
    },
    {
        "name": "普隆隆姆",
        "zhuyin": [
            "ㄆㄨˇ",
            "ㄌㄨㄥˊ",
            "ㄌㄨㄥˊ",
            "ㄇㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png"
    },
    {
        "name": "摩托蜥",
        "zhuyin": [
            "ㄇㄛˊ",
            "ㄊㄨㄛ",
            "ㄒㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png"
    },
    {
        "name": "拖拖蚓",
        "zhuyin": [
            "ㄊㄨㄛ",
            "ㄊㄨㄛ",
            "ㄧㄣˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png"
    },
    {
        "name": "晶光芽",
        "zhuyin": [
            "ㄐㄧㄥ",
            "ㄍㄨㄤ",
            "ㄧㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png"
    },
    {
        "name": "晶光花",
        "zhuyin": [
            "ㄐㄧㄥ",
            "ㄍㄨㄤ",
            "ㄏㄨㄚ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png"
    },
    {
        "name": "墓仔狗",
        "zhuyin": [
            "ㄇㄨˋ",
            "ㄗㄞˇ",
            "ㄍㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png"
    },
    {
        "name": "墓揚犬",
        "zhuyin": [
            "ㄇㄨˋ",
            "ㄧㄤˊ",
            "ㄑㄩㄢˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png"
    },
    {
        "name": "纏紅鶴",
        "zhuyin": [
            "ㄔㄢˊ",
            "ㄏㄨㄥˊ",
            "ㄏㄜˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png"
    },
    {
        "name": "走鯨",
        "zhuyin": [
            "ㄗㄡˇ",
            "ㄐㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png"
    },
    {
        "name": "浩大鯨",
        "zhuyin": [
            "ㄏㄠˋ",
            "ㄉㄚˋ",
            "ㄐㄧㄥ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png"
    },
    {
        "name": "輕身鱈",
        "zhuyin": [
            "ㄑㄧㄥ",
            "ㄕㄣ",
            "ㄒㄩㄝˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png"
    },
    {
        "name": "吃吼霸",
        "zhuyin": [
            "ㄔ",
            "ㄏㄡˇ",
            "ㄅㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png"
    },
    {
        "name": "米立龍",
        "zhuyin": [
            "ㄇㄧˇ",
            "ㄌㄧˋ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png"
    },
    {
        "name": "棄世猴",
        "zhuyin": [
            "ㄑㄧˋ",
            "ㄕˋ",
            "ㄏㄡˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png"
    },
    {
        "name": "土王",
        "zhuyin": [
            "ㄊㄨˇ",
            "ㄨㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png"
    },
    {
        "name": "奇麒麟",
        "zhuyin": [
            "ㄑㄧˊ",
            "ㄑㄧˊ",
            "ㄌㄧㄣˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png"
    },
    {
        "name": "土龍節節",
        "zhuyin": [
            "ㄊㄨˇ",
            "ㄌㄨㄥˊ",
            "ㄐㄧㄝˊ",
            "ㄐㄧㄝˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png"
    },
    {
        "name": "仆刀將軍",
        "zhuyin": [
            "ㄆㄨ",
            "ㄉㄠ",
            "ㄐㄧㄤ",
            "ㄐㄩㄣ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png"
    },
    {
        "name": "雄偉牙",
        "zhuyin": [
            "ㄒㄩㄥˊ",
            "ㄨㄟˇ",
            "ㄧㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png"
    },
    {
        "name": "吼叫尾",
        "zhuyin": [
            "ㄏㄡˇ",
            "ㄐㄧㄠˋ",
            "ㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png"
    },
    {
        "name": "猛惡菇",
        "zhuyin": [
            "ㄇㄥˇ",
            "ㄜˋ",
            "ㄍㄨ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png"
    },
    {
        "name": "振翼髮",
        "zhuyin": [
            "ㄓㄣˋ",
            "ㄧˋ",
            "ㄈㄚˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png"
    },
    {
        "name": "爬地翅",
        "zhuyin": [
            "ㄆㄚˊ",
            "ㄉㄧˋ",
            "ㄔˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png"
    },
    {
        "name": "沙鐵皮",
        "zhuyin": [
            "ㄕㄚ",
            "ㄊㄧㄝˇ",
            "ㄆㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png"
    },
    {
        "name": "鐵轍跡",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄓㄜˊ",
            "ㄐㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png"
    },
    {
        "name": "鐵包袱",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄅㄠ",
            "ㄈㄨˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png"
    },
    {
        "name": "鐵臂膀",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄅㄧˋ",
            "ㄅㄤˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png"
    },
    {
        "name": "鐵脖頸",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄅㄛˊ",
            "ㄐㄧㄥˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png"
    },
    {
        "name": "鐵毒蛾",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄉㄨˊ",
            "ㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png"
    },
    {
        "name": "鐵荊棘",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄐㄧㄥ",
            "ㄐㄧˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png"
    },
    {
        "name": "涼脊龍",
        "zhuyin": [
            "ㄌㄧㄤˊ",
            "ㄐㄧˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png"
    },
    {
        "name": "凍脊龍",
        "zhuyin": [
            "ㄉㄨㄥˋ",
            "ㄐㄧˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png"
    },
    {
        "name": "戟脊龍",
        "zhuyin": [
            "ㄐㄧˇ",
            "ㄐㄧˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png"
    },
    {
        "name": "索財靈",
        "zhuyin": [
            "ㄙㄨㄛˇ",
            "ㄘㄞˊ",
            "ㄌㄧㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png"
    },
    {
        "name": "賽富豪",
        "zhuyin": [
            "ㄙㄞˋ",
            "ㄈㄨˋ",
            "ㄏㄠˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png"
    },
    {
        "name": "古簡蝸",
        "zhuyin": [
            "ㄍㄨˇ",
            "ㄐㄧㄢˇ",
            "ㄨㄛ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png"
    },
    {
        "name": "古劍豹",
        "zhuyin": [
            "ㄍㄨˇ",
            "ㄐㄧㄢˋ",
            "ㄅㄠˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png"
    },
    {
        "name": "古鼎鹿",
        "zhuyin": [
            "ㄍㄨˇ",
            "ㄉㄧㄥˇ",
            "ㄌㄨˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png"
    },
    {
        "name": "古玉魚",
        "zhuyin": [
            "ㄍㄨˇ",
            "ㄩˋ",
            "ㄩˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png"
    },
    {
        "name": "轟鳴月",
        "zhuyin": [
            "ㄏㄨㄥ",
            "ㄇㄧㄥˊ",
            "ㄩㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png"
    },
    {
        "name": "鐵武者",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄨˇ",
            "ㄓㄜˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png"
    },
    {
        "name": "故勒頓",
        "zhuyin": [
            "ㄍㄨˋ",
            "ㄌㄟ",
            "ㄉㄨㄣˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png"
    },
    {
        "name": "密勒頓",
        "zhuyin": [
            "ㄇㄧˋ",
            "ㄌㄟ",
            "ㄉㄨㄣˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png"
    },
    {
        "name": "波盪水",
        "zhuyin": [
            "ㄅㄛ",
            "ㄉㄤˋ",
            "ㄕㄨㄟˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png"
    },
    {
        "name": "鐵斑葉",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄅㄢ",
            "ㄧㄝˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png"
    },
    {
        "name": "裹蜜蟲",
        "zhuyin": [
            "ㄍㄨㄛˇ",
            "ㄇㄧˋ",
            "ㄔㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png"
    },
    {
        "name": "斯魔茶",
        "zhuyin": [
            "ㄙ",
            "ㄇㄛˊ",
            "ㄔㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png"
    },
    {
        "name": "來悲粗茶",
        "zhuyin": [
            "ㄌㄞˊ",
            "ㄅㄟ",
            "ㄘㄨ",
            "ㄔㄚˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png"
    },
    {
        "name": "夠讚狗",
        "zhuyin": [
            "ㄍㄡˋ",
            "ㄗㄢˋ",
            "ㄍㄡˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png"
    },
    {
        "name": "願增猿",
        "zhuyin": [
            "ㄩㄢˋ",
            "ㄗㄥ",
            "ㄩㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png"
    },
    {
        "name": "吉雉雞",
        "zhuyin": [
            "ㄐㄧˊ",
            "ㄓˋ",
            "ㄐㄧ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png"
    },
    {
        "name": "厄鬼椪",
        "zhuyin": [
            "ㄜˋ",
            "ㄍㄨㄟˇ",
            "ㄆㄥˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png"
    },
    {
        "name": "鋁鋼橋龍",
        "zhuyin": [
            "ㄌㄩˇ",
            "ㄍㄤ",
            "ㄑㄧㄠˊ",
            "ㄌㄨㄥˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png"
    },
    {
        "name": "蜜集大蛇",
        "zhuyin": [
            "ㄇㄧˋ",
            "ㄐㄧˊ",
            "ㄉㄚˋ",
            "ㄕㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png"
    },
    {
        "name": "破空焰",
        "zhuyin": [
            "ㄆㄛˋ",
            "ㄎㄨㄥ",
            "ㄧㄢˋ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png"
    },
    {
        "name": "猛雷鼓",
        "zhuyin": [
            "ㄇㄥˇ",
            "ㄌㄟˊ",
            "ㄍㄨˇ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png"
    },
    {
        "name": "鐵磐岩",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄆㄢˊ",
            "ㄧㄢˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png"
    },
    {
        "name": "鐵頭殼",
        "zhuyin": [
            "ㄊㄧㄝˇ",
            "ㄊㄡˊ",
            "ㄎㄜˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png"
    },
    {
        "name": "太樂巴戈斯",
        "zhuyin": [
            "ㄊㄞˋ",
            "ㄌㄜˋ",
            "ㄅㄚ",
            "ㄍㄜ",
            "ㄙ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png"
    },
    {
        "name": "桃歹郎",
        "zhuyin": [
            "ㄊㄠˊ",
            "ㄉㄞˇ",
            "ㄌㄤˊ"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png"
    }
];
