export class IndexStory {
  url: string;
  title: string;
  inner: string;
  img: string;
  voteup: number;
  comment: number;
  reader: number;

  constructor(url: string, title: string, inner: string, img: string, voteup: number, comment: number, reader: number) {
    this.url = url;
    this.title = title;
    this.inner = inner;
    this.img = img;
    this.voteup = voteup;
    this.comment = comment;
    this.reader = reader;
  }

}

export const indexStoryShow: IndexStory[] = [
  new IndexStory(
    'https://www.bh3.com/valkyria/mei_c1.html',
    '女武神·游侠',
    '女武神·游侠」是琪亚娜·卡斯兰娜在在圣芙蕾雅学园的学园制服。这套「机械」属性的远程制服靠拉开与敌人的距离来制造输出的机会。琪亚娜可在远处向敌人进行连续射击，射击的伤害会逐渐升高。还可以在三连枪击后进行蓄力，从而发动「陨石冲击」，制造更为强力的一击。',
    'https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c1.png',
    2333,
    23,
    4
  ),
  new IndexStory(
    'https://www.bh3.com/valkyria/mei_c2.html',
    '脉冲装·绯红',
    '「脉冲装·绯红」，雷电芽衣获得的第一套「女武神」装甲。这套「机械」属性的远程制服靠拉开与敌人的距离来制造输出的机会。琪亚娜可在远处向敌人进行连续射击，射击的伤害会逐渐升高。还可以在三连枪击后进行蓄力，从而发动「陨石冲击」，制造更为强力的一击。',
    'https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c1.png',
    2233,
    23,
    5
  ),
  new IndexStory(
    'https://www.bh3.com/valkyria/kiana_c1.html',
    '女武神·游侠',
    '女武神·游侠」是琪亚娜·卡斯兰娜在在圣芙蕾雅学园的学园制服。获得装甲后，雷电芽衣对其进行了一定的改造，使得装甲与日本武士刀法完美结合，更好地发挥雷电芽衣的快速近战与闪避瞬移能力。装甲也被刻上了「雷」字，表明为雷电芽衣专属。琪亚娜可在远处向敌人进',
    'https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c1.png',
    2333,
    23,
    6
  ),
  new IndexStory(
    'https://www.bh3.com/valkyria/kiana_c1.html',
    '女武神·游侠',
    '女武神·游侠」是琪亚娜·卡斯兰娜在在圣芙蕾雅学园机会。必杀技「月读」发动时，可召唤终极影分身来协同作战。影分身继承本体全部的攻击暴击属性，拥有本体一半的HP。分身HP归零时会爆炸消失，释放电能，麻痹周围敌人。蓄力，从而发动「陨石冲击」，制造更为强力的一击。',
    'https://static.event.mihoyo.com/bh3_homepage/images/valkyria/album/mei_c1.png',
    2333,
    23,
    7
  )
];
