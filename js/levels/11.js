
var oneone = Mario.oneone = function () {

  level = new Mario.Level({
    playerPos: [56, 192],
    loader: Mario.oneone,
    background: "#7974FF",
    scrolling: true,
    invincibility: [144, 192, 201],

    floorSprite: new Mario.Sprite('sprites/tiles.png', [0, 0], [16, 16], 0),
    cloudSprite: new Mario.Sprite('sprites/tiles.png', [0, 320], [48, 32], 0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16], [16, 16], 0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16, 16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png', [32, 0], [16, 16], 0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64, 0], [8, 8], 3, [0, 1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16, 16], 0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0, 0], [16, 16], 0),
    fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0, 32], [16, 16], 20, [0, 1, 2, 3]),
    starSprite: new Mario.Sprite('sprites/items.png', [0, 48], [16, 16], 20, [0, 1, 2, 3]),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16, 16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16, 16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16, 16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16, 16], 0),

    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32, 16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16, 32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16, 32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32, 16], 0),
    qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16, 16], 8, [0, 0, 0, 0, 1, 2, 1]),
    bcoinSprite: function () {
      return new Mario.Sprite('sprites/items.png', [0, 112], [16, 16], 20, [0, 1, 2, 3]);
    },
    cloudSprites: [
      new Mario.Sprite('sprites/tiles.png', [0, 320], [16, 32], 0),
      new Mario.Sprite('sprites/tiles.png', [16, 320], [16, 32], 0),
      new Mario.Sprite('sprites/tiles.png', [32, 320], [16, 32], 0)
    ],
    hillSprites: [
      new Mario.Sprite('sprites/tiles.png', [128, 128], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [144, 128], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [160, 128], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [128, 144], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [144, 144], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [160, 144], [16, 16], 0)
    ],
    bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0), // Scenery bush
    bushSprites: [ // Scenery bushes
      new Mario.Sprite('sprites/tiles.png', [176, 144], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [192, 144], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [208, 144], [16, 16], 0)],
    goombaSprite: function () {
      return new Mario.Sprite('sprites/enemy.png', [0, 16], [16, 16], 3, [0, 1]);
    },
    koopaSprite: function () {
      return new Mario.Sprite('sprites/enemy.png', [96, 0], [16, 32], 2, [0, 1]);
    },
     // Add bush enemy sprite - using a placeholder for now
    bushEnemySprite: function() {
        return new Mario.Sprite('sprites/enemy.png', [0, 16], [16, 16], 3, [0, 1]); // Placeholder: Same as Goomba
    },
    flagPoleSprites: [
      new Mario.Sprite('sprites/tiles.png', [256, 128], [16, 16], 0),
      new Mario.Sprite('sprites/tiles.png', [256, 144], [16, 16], 0),
      new Mario.Sprite('sprites/items.png', [128, 32], [16, 16], 0)
    ]
  });


  let levelWidth = 212; // طول الگوی پایه واقعی
  let targetLength = 10000; // افزایش طول مرحله به 10000
  let repeatCount = Math.ceil(targetLength / levelWidth);
  level.width = targetLength;

  for (let i = 0; i < repeatCount; i++) {
    let offset = i * levelWidth;

    // --- بخش‌های ثابت یا با تنوع کم (برای حفظ ظاهر کلی) ---
    // ابرها
    [[7, 3], [19, 2], [56, 3], [67, 2], [87, 2], [103, 2], [152, 3], [163, 2], [200, 3]].forEach(cloud => {
      level.putCloud(cloud[0] + offset, cloud[1]);
    });
    [[36, 2], [132, 2], [180, 2]].forEach(cloud => {
      level.putTwoCloud(cloud[0] + offset, cloud[1]);
    });
    [[27, 3], [75, 3], [123, 3], [171, 3]].forEach(cloud => {
      level.putThreeCloud(cloud[0] + offset, cloud[1]);
    });

    // تپه‌ها
    [0, 48, 96, 144, 192].forEach(hill => {
      level.putBigHill(hill + offset, 12);
    });
    [16, 64, 111, 160].forEach(hill => {
      level.putSmallHill(hill + offset, 12);
    });

    // بوته‌های تزئینی
    [23, 71, 118, 167].forEach(bush => {
      level.putBush(bush + offset, 12);
    });
    [41, 89, 137].forEach(bush => {
      level.putTwoBush(bush + offset, 12);
    });
    [11, 59, 106, 185, 230].forEach(bush => {
      level.putThreeBush(bush + offset, 12);
    });


    // --- بخش‌های با تنوع بالا (زمین، لوله‌ها، بلوک‌ها، دشمنان) ---
    let scenario = 0.14;

    if (scenario < 0.03) { // سناریو 1: الگوی اصلی (احتمال خیلی خیلی کم)
        level.putFloor(0 + offset, 212 + offset); // زمین صاف
        level.putPipe(28 + offset, 13, 2);
        level.putPipe(38 + offset, 13, 3);
        level.putPipe(35 + offset, 13, 4);
        level.putQBlock(16 + offset, 9, Math.random() < 0.6 ? new Mario.Bcoin([16 * 16 + offset * 16, 144]) : Math.random() < 0.75 ? new Mario.Mushroom([16 * 16 + offset * 16, 144]) : new Mario.Star([16 * 16 + offset * 16, 144]));
        level.putQBlock(17 + offset, 9, new Mario.Bcoin([17 * 16 + offset * 16, 144]));
        level.putQBlock(18 + offset, 9, Math.random() < 0.7 ? new Mario.Mushroom([18 * 16 + offset * 16, 144]) : new Mario.Fireflower([18 * 16 + offset * 16, 144]));
        level.putBrick(17 + offset, 5);
        level.putBrick(16 + offset, 5, Math.random() < 0.8 ? new Mario.Bcoin([16 * 16 + offset * 16, 80]) : null);
        level.putBrick(18 + offset, 5, Math.random() < 0.8 ? new Mario.Bcoin([18 * 16 + offset * 16, 80]) : null);
        [22, 40, 50, 51, 82, 84, 100, 102, 114, 115, 122, 123, 125, 126, 170, 172, 180, 190].forEach(x => {
          if (Math.random() < 0.6) { level.putGoomba(x + offset, 12); }
        });
        if (Math.random() < 0.4) { level.putKoopa(35 + offset, 11); }
        if (Math.random() < 0.4) { level.putKoopa(75 + offset, 11); }
        if (Math.random() < 0.5) level.putGoomba(25 + offset, 12); // Add bush enemy

    } else if (scenario < 0.09) { // سناریو 2: زمین پله‌ای بالا رونده با بلوک و دشمن
        level.putFloor(0 + offset, 212 + offset);
        level.putFloor(15 + offset, 20 + offset);
        level.putFloor(30 + offset, 40 + offset);
        level.putFloor(50 + offset, 212 + offset);
        level.putWall(10 + offset, 13, 3);
        level.putWall(25 + offset, 13, 4);
        level.putWall(30 + offset, 13, 4);
        level.putQBlock(18 + offset, 10, new Mario.Mushroom([16 * (18 + offset), 160]));
        level.putBrick(33 + offset, 7, new Mario.Star([16 * (33 + offset), 112]));
        level.putGoomba(18 + offset, 9);
        level.putGoomba(33 + offset, 6);
        level.putKoopa(55 + offset, 7);
        if (Math.random() < 0.7) level.putGoomba(20 + offset, 9);
        if (Math.random() < 0.7) level.putGoomba(40 + offset, 5);

    } else if (scenario < 0.15) { // سناریو 3: زمین پله‌ای پایین رونده با بلوک و دشمن
        level.putFloor(0 + offset, 212 + offset);
        level.putFloor(10 + offset, 25 + offset); // پله اول
        level.putFloor(25 + offset, 40 + offset); // پله دوم
        level.putFloor(40 + offset, 55 + offset); // پله سوم
        level.putWall(25 + offset, 13, 3);
        level.putWall(40 + offset, 13, 2);
        level.putWall(55 + offset, 13, 4);
        // level.putQBlock(15 + offset, 10, new Mario.Bcoin([16 * (15 + offset), 160]));
        // level.putBrick(30 + offset, 7, new Mario.Fireflower([16 * (30 + offset), 112]));
        level.putGoomba(17 + offset, 9);
        level.putGoomba(32 + offset, 6);
        level.putKoopa(10 + offset, 11);
        if (Math.random() < 0.6) level.putGoomba(12 + offset, 9);
        if (Math.random() < 0.6) level.putGoomba(28 + offset, 6);


    } else if (scenario < 0.22) { // سناریو 4: لوله‌های بلند و کوتاه با بلوک‌های معلق و دشمن
        level.putFloor(0 + offset, 212 + offset);
        level.putPipe(20 + offset, 13, 3);
        level.putPipe(30 + offset, 13, 2);
        level.putPipe(40 + offset, 13, 5);
        level.putPipe(50 + offset, 13, 3);
        level.putBrick(25 + offset, 7);
        level.putQBlock(26 + offset, 7, new Mario.Fireflower([16 * (26 + offset), 112]));
        level.putBrick(27 + offset, 7);
        level.putGoomba(26 + offset, 6);
        level.putKoopa(45 + offset, 5);
        if (Math.random() < 0.8) level.putGoomba(35 + offset, 12);

    } else if (scenario < 0.30) { // سناریو 5: چاه عمیق با سکوهای کوچک و دشمن
        level.putFloor(0 + offset, 20 + offset); // زمین قبل از چاه
        level.putFloor(30 + offset, 212 + offset); // زمین بعد از چاه
        // چاه در فاصله 15 تا 50
        level.putFloor(25 + offset, 30 + offset); // سکوی اول در چاه
        level.putFloor(35 + offset, 40 + offset); // سکوی دوم در چاه
        level.putQBlock(27 + offset, 10, new Mario.Bcoin([16 * (27 + offset), 160]));
        level.putBrick(37 + offset, 9, new Mario.Mushroom([16 * (37 + offset), 144]));
        level.putGoomba(28 + offset, 9);
        level.putKoopa(38 + offset, 8);
        if (Math.random() < 0.9) level.putGoomba(30 + offset, 9);

    } else if (scenario < 0.40) { // سناریو 6: تعداد زیادی بلوک سوال و آجری با دشمن
        level.putFloor(0 + offset, 212 + offset);
        for(let j = 0; j < 9; j++) { // تعداد بلوک‌ها بیشتر
            level.putQBlock(20 + offset + j * 2, 9, Math.random() < 0.7 ? new Mario.Bcoin([16 * (20 + offset + j * 2), 144]) : Math.random() < 0.85 ? new Mario.Mushroom([16 * (20 + offset + j * 2), 144]) : new Mario.Star([16 * (20 + offset + j * 2), 144]));
            level.putBrick(21 + offset + j * 2, 6, Math.random() < 0.6 ? new Mario.Bcoin([16 * (21 + offset + j * 2), 96]) : Math.random() < 0.8 ? new Mario.Fireflower([16 * (21 + offset + j * 2), 96]) : null);
        }
        level.putPipe(50 + offset, 13, 2); // لوله جابجا شده
        level.putGoomba(52 + offset, 8);
        if (Math.random() < 0.7) level.putGoomba(25 + offset, 12);
        if (Math.random() < 0.7) level.putGoomba(45 + offset, 12);


    } else if (scenario < 0.50) { // سناریو 7: زمین موج‌دار با دشمنان و بلوک
        level.putFloor(0 + offset, 10 + offset);
        level.putFloor(15 + offset, 25 + offset);
        level.putFloor(30 + offset, 40 + offset);
        level.putFloor(45 + offset, 212 + offset);
        level.putGoomba(8 + offset, 12);
        level.putGoomba(18 + offset, 12);
        level.putGoomba(33 + offset, 12);
        level.putKoopa(48 + offset, 11);
        level.putQBlock(18 + offset, 5, new Mario.Bcoin([16 * (18 + offset), 80]));
        level.putBrick(33 + offset, 3);
        if (Math.random() < 0.8) level.putGoomba(10 + offset, 12);
        if (Math.random() < 0.8) level.putGoomba(30 + offset, 12);


    } else if (scenario < 0.60) { // سناریو 8: لوله‌های ورودی/خروجی و چالش پرش
         level.putFloor(0 + offset, 25 + offset); // زمین قبل از چاه
         level.putFloor(50 + offset, 212 + offset); // زمین بعد از چاه
         // چاه در فاصله 30 تا 70
         level.putRealPipe(35 + offset, 13, 3, "DOWN", function() {
              Mario.oneonetunnel.call(); // لوله ورودی به تونل
              player.pos = [40, 16]; // موقعیت در تونل
              player.pipe("DOWN", function() {});
         });
          level.putRealPipe(60 + offset, 13, 2, "UP", function() {
              Mario.oneone.call(); // لوله خروجی از مرحله اصلی
              // موقعیت خروجی را تنظیم کنید تا در ابتدای بخش بعدی قرار گیرد
              player.pos = [16 * (70 + offset) + 16, 16 * 10];
              player.pipe("UP", function() {});
         });
         level.putGoomba(75 + offset, 12); // دشمن بعد از چاه
         if (Math.random() < 0.7) level.putGoomba(72 + offset, 12);

    } else if (scenario < 0.70) { // سناریو 9: بلوک‌های معلق پیچیده با دشمن
        level.putFloor(0 + offset,90 + offset);
        level.putBrick(20 + offset, 8);
        level.putBrick(21 + offset, 8);
        level.putQBlock(22 + offset, 8, new Mario.Star([16 * (22 + offset), 128]));
        level.putBrick(23 + offset, 8);
        level.putBrick(24 + offset, 8);

        level.putBrick(26 + offset, 10);
        level.putQBlock(27 + offset, 10, new Mario.Mushroom([16 * (27 + offset), 160]));
        level.putBrick(28 + offset, 10);

        level.putBrick(30 + offset, 7);
        level.putBrick(31 + offset, 7);
        level.putQBlock(32 + offset, 7, new Mario.Fireflower([16 * (32 + offset), 112]));
        level.putBrick(33 + offset, 7);

        level.putGoomba(22 + offset, 7);
        level.putKoopa(27 + offset, 9);
        if (Math.random() < 0.8) level.putGoomba(30 + offset, 6);

    } else if (scenario < 0.80) { // سناریو 10: تعداد زیادی لوله با ارتفاع‌های مختلف و قابل پرش
        level.putFloor(0 + offset, 80 + offset);
        level.putPipe(20 + offset, 13, Math.floor(Math.random() * 1.5) + 1); // لوله با ارتفاع تصادفی 2 یا 3
        level.putPipe(30 + offset, 13, Math.floor(Math.random() * 1.5) + 1);
        level.putPipe(40 + offset, 13, Math.floor(Math.random() * 1.5) + 1);
        level.putPipe(50 + offset, 13, Math.floor(Math.random() * 1.5) + 1);
        level.putPipe(60 + offset, 13, Math.floor(Math.random() * 1.5) + 1);
        level.putPipe(70 + offset, 13, Math.floor(Math.random() * 1.5) + 1);
        if (Math.random() < 0.8) level.putGoomba(25 + offset, 12);
        if (Math.random() < 0.8) level.putGoomba(45 + offset, 12);
        if (Math.random() < 0.5) level.putKoopa(55 + offset, 11);
        if (Math.random() < 0.7) level.putGoomba(35 + offset, 12);

    } else if (scenario < 0.90) { // سناریو 11: زمین با فرورفتگی‌های متعدد و بلوک‌های سوال
        level.putFloor(0 + offset, 10 + offset);
        level.putFloor(20 + offset, 30 + offset);
        level.putFloor(40 + offset, 50 + offset);
        level.putFloor(60 + offset, 80 + offset);
        level.putQBlock(15 + offset, 9, new Mario.Bcoin([16 * (15 + offset), 144]));
        level.putQBlock(35 + offset, 9, new Mario.Mushroom([16 * (35 + offset), 144]));
        level.putQBlock(55 + offset, 9, new Mario.Star([16 * (55 + offset), 144]));
        level.putGoomba(18 + offset, 12);
        level.putGoomba(38 + offset, 12);
        level.putGoomba(58 + offset, 12);
        if (Math.random() < 0.8) level.putGoomba(25 + offset, 12);
        if (Math.random() < 0.8) level.putGoomba(45 + offset, 12);


    } else { // سناریو 12: ترکیبی از موانع و دشمنان زیاد
        level.putFloor(0 + offset, 60 + offset);
        level.putPipe(20 + offset, 13, 2);
        level.putBrick(25 + offset, 9);
        level.putQBlock(26 + offset, 9, new Mario.Bcoin([16 * (26 + offset), 144]));
        level.putBrick(27 + offset, 9);
        level.putGoomba(26 + offset, 8);
        level.putKoopa(35 + offset, 11);
        for(let j = 0; j < 7; j++) { // تعداد گومبا بیشتر
             if (Math.random() < 0.8) { level.putGoomba(40 + offset + j * 2, 12); }
        }
        level.putPipe(55 + offset, 13, 3);
        level.putQBlock(60 + offset, 7, new Mario.Fireflower([16 * (60 + offset), 112]));
        if (Math.random() < 0.8) level.putGoomba(58 + offset, 12);
    }
  //   let scenario = Math.random();

  //   if (scenario < 0.1) {
  //       level.putFloor(0 + offset, 50 + offset);
  //       level.putPipe(10 + offset, 13, 2);
  //       level.putPipe(18 + offset, 13, 3);
  //       level.putPipe(24 + offset, 13, 4);
  //       level.putQBlock(6 + offset, 9, Math.random() < 0.6 ? new Mario.Bcoin([16 * (6 + offset), 144]) : Math.random() < 0.75 ? new Mario.Mushroom([16 * (6 + offset), 144]) : new Mario.Star([16 * (6 + offset), 144]));
  //       level.putQBlock(7 + offset, 9, new Mario.Bcoin([16 * (7 + offset), 144]));
  //       level.putQBlock(8 + offset, 9, Math.random() < 0.7 ? new Mario.Mushroom([16 * (8 + offset), 144]) : new Mario.Fireflower([16 * (8 + offset), 144]));
  //       level.putBrick(7 + offset, 5);
  //       level.putBrick(6 + offset, 5, Math.random() < 0.8 ? new Mario.Bcoin([16 * (6 + offset), 80]) : null);
  //       level.putBrick(8 + offset, 5, Math.random() < 0.8 ? new Mario.Bcoin([16 * (8 + offset), 80]) : null);
  //       [10, 14, 16, 18, 20].forEach(x => {
  //           if (Math.random() < 0.6) level.putGoomba(x + offset, 12);
  //       });
  //       if (Math.random() < 0.4) level.putKoopa(12 + offset, 11);
  //       if (Math.random() < 0.4) level.putKoopa(22 + offset, 11);
  //       if (Math.random() < 0.5) level.putGoomba(9 + offset, 12);
  //   }
  //   else if (scenario < 0.2) {
  //       level.putFloor(0 + offset, 40 + offset);
  //       level.putPlatform(10 + offset, 8, 3);
  //       level.putPlatform(18 + offset, 6, 3);
  //       [12, 14, 20].forEach(x => {
  //           if (Math.random() < 0.7) level.putGoomba(x + offset, 12);
  //       });
  //       if (Math.random() < 0.6) level.putKoopa(16 + offset, 11);
  //   }
  //   else if (scenario < 0.3) {
  //       level.putFloor(0 + offset, 40 + offset);
  //       level.putBridge(10 + offset, 12, 5);
  //       level.putGap(15 + offset, 3);
  //       level.putBridge(18 + offset, 12, 3);
  //       if (Math.random() < 0.7) level.putGoomba(12 + offset, 12);
  //       if (Math.random() < 0.5) level.putKoopa(20 + offset, 11);
  //   }
  //   else if (scenario < 0.4) {
  //       level.putFloor(0 + offset, 35 + offset);
  //       level.putStairs(10 + offset, 4, 4);
  //       level.putStairs(16 + offset, 4, 4, true);
  //       if (Math.random() < 0.6) level.putKoopa(14 + offset, 11);
  //   }
  //   else if (scenario < 0.5) {
  //       level.putFloor(0 + offset, 30 + offset);
  //       level.putElevator(12 + offset, 9, 4, true);
  //       level.putElevator(18 + offset, 6, 4, false);
  //       if (Math.random() < 0.5) level.putGoomba(14 + offset, 12);
  //   }
  //   else if (scenario < 0.6) {
  //       level.putFloor(0 + offset, 40 + offset);
  //       level.putHill(10 + offset, 2);
  //       if (Math.random() < 0.5) level.putKoopa(12 + offset, 11);
  //       if (Math.random() < 0.5) level.putGoomba(14 + offset, 12);
  //   }
  //   else if (scenario < 0.7) {
  //       level.putFloor(0 + offset, 45 + offset);
  //       level.putPipe(10 + offset, 13, 2);
  //       level.putQBlock(12 + offset, 9, new Mario.Bcoin([16 * (12 + offset), 144]));
  //       if (Math.random() < 0.5) level.putKoopa(14 + offset, 11);
  //   }
  //   else if (scenario < 0.8) {
  //       level.putFloor(0 + offset, 38 + offset);
  //       level.putCloudPlatform(10 + offset, 5, 3);
  //       level.putCloudPlatform(16 + offset, 6, 3);
  //       if (Math.random() < 0.5) level.putGoomba(18 + offset, 12);
  //   }
  //   else if (scenario < 0.9) {
  //       level.putFloor(0 + offset, 35 + offset);
  //       level.putBridge(10 + offset, 12, 4);
  //       level.putBridge(15 + offset, 12, 4);
  //       if (Math.random() < 0.6) level.putGoomba(13 + offset, 12);
  //   }
  //   else {
  //       level.putFloor(0 + offset, 30 + offset);
  //       level.putCastle(15 + offset);
  //       level.putFlagPole(14 + offset);
  //   }

  //   // پرچم پایان مرحله فقط برای آخرین بخش اضافه شود
  //   if (i === repeatCount - 1) {
  //     level.putFlagpole(198 + offset);
  //   }
  // }
}

  music.underground.pause();
  music.overworld.play();
};


