let _1 = 0
let _2 = 0
let _3 = 0
player.onChat("mist", function () {
    blocks.fill(
    WATER,
    pos(-25, -1, -1),
    pos(25, -1, -20),
    FillOperation.Replace
    )
    _1 = -36
    _2 = -10
    for (let index = 0; index < 7; index++) {
        shapes.line(
        COBBLESTONE,
        pos(-63, 0, _2),
        pos(-42, 20, _2)
        )
        shapes.line(
        COBBLESTONE,
        pos(63, 0, _2),
        pos(42, 20, _2)
        )
        _2 += -1
    }
    for (let index = 0; index < 7; index++) {
        blocks.fill(
        MOSS_STONE,
        pos(_1 - 6, 12, -10),
        pos(_1 - 6, -1, -16),
        FillOperation.Replace
        )
        blocks.fill(
        MOSS_STONE,
        pos(_1 + 6, 12, -10),
        pos(_1 + 6, -1, -16),
        FillOperation.Replace
        )
        _2 = -10
        blocks.fill(
        MOSS_STONE,
        pos(_1 - 6, 13, -10),
        pos(_1 + 6, 20, -16),
        FillOperation.Replace
        )
        for (let index = 0; index < 7; index++) {
            shapes.circle(
            AIR,
            pos(_1, 12, _2),
            5,
            Axis.Z,
            ShapeOperation.Replace
            )
            _2 += -1
        }
        _1 += 12
    }
    blocks.fill(
    COBBLESTONE,
    pos(-41, 20, -11),
    pos(42, 20, -15),
    FillOperation.Replace
    )
    blocks.fill(
    IRON_BARS,
    pos(-42, 21, -10),
    pos(42, 21, -10),
    FillOperation.Replace
    )
    blocks.fill(
    IRON_BARS,
    pos(-42, 21, -16),
    pos(42, 21, -16),
    FillOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    pos(43, 0, -10),
    pos(46, -2, -16),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(44, 0, -11),
    pos(45, -1, -15),
    FillOperation.Replace
    )
})
player.onChat("akveduk3", function () {
    blocks.fill(
    BLOCK_OF_QUARTZ,
    pos(43, 0, -10),
    pos(46, -2, -14),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(44, 0, -11),
    pos(45, -1, -13),
    FillOperation.Replace
    )
    _3 = 0
    for (let index = 0; index < 2; index++) {
        blocks.fill(
        MOSS_STONE,
        pos(-42, 0 + _3, -10),
        pos(42, 20 + _3, -14),
        FillOperation.Replace
        )
        _1 = -36
        for (let index = 0; index < 7; index++) {
            _2 = -10
            for (let index = 0; index < 5; index++) {
                shapes.circle(
                AIR,
                pos(_1, 12 + _3, _2),
                5,
                Axis.Z,
                ShapeOperation.Replace
                )
                _2 += -1
            }
            blocks.fill(
            AIR,
            pos(_1 + 5, 0 + _3, -10),
            pos(_1 - 5, 12 + _3, -14),
            FillOperation.Replace
            )
            _1 += 12
        }
        blocks.fill(
        WATER,
        pos(-41, 19 + _3, -11),
        pos(42, 20 + _3, -13),
        FillOperation.Replace
        )
        _3 += 20
    }
    _3 = 40
    blocks.fill(
    MOSS_STONE,
    pos(-40, 0 + _3, -10),
    pos(40, 13 + _3, -14),
    FillOperation.Replace
    )
    _1 = -36
    for (let index = 0; index < 13; index++) {
        _2 = -10
        for (let index = 0; index < 5; index++) {
            shapes.circle(
            AIR,
            pos(_1, 8 + _3, _2),
            2,
            Axis.Z,
            ShapeOperation.Replace
            )
            _2 += -1
        }
        blocks.fill(
        AIR,
        pos(_1 + 2, 0 + _3, -10),
        pos(_1 - 2, 8 + _3, -14),
        FillOperation.Replace
        )
        _1 += 6
    }
    blocks.fill(
    WATER,
    pos(-39, 12 + _3, -11),
    pos(40, 13 + _3, -13),
    FillOperation.Replace
    )
})
player.onChat("clean", function () {
    blocks.fill(
    AIR,
    pos(-64, 0, -9),
    pos(64, 25, -17),
    FillOperation.Replace
    )
})
player.onChat("akveduk2", function () {
    _3 = 0
    for (let index = 0; index < 2; index++) {
        blocks.fill(
        MOSS_STONE,
        pos(-42, 0 + _3, -10),
        pos(42, 20 + _3, -14),
        FillOperation.Replace
        )
        _1 = -36
        for (let index = 0; index < 7; index++) {
            _2 = -10
            for (let index = 0; index < 5; index++) {
                shapes.circle(
                AIR,
                pos(_1, 12 + _3, _2),
                5,
                Axis.Z,
                ShapeOperation.Replace
                )
                _2 += -1
            }
            blocks.fill(
            AIR,
            pos(_1 + 5, 0 + _3, -10),
            pos(_1 - 5, 12 + _3, -14),
            FillOperation.Replace
            )
            _1 += 12
        }
        blocks.fill(
        WATER,
        pos(-41, 19 + _3, -11),
        pos(42, 20 + _3, -13),
        FillOperation.Replace
        )
        _3 += 20
    }
    blocks.fill(
    BLOCK_OF_QUARTZ,
    pos(43, 0, -10),
    pos(46, -2, -14),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(44, 0, -11),
    pos(45, -1, -13),
    FillOperation.Replace
    )
})
player.onChat("akveduk", function () {
    blocks.fill(
    MOSS_STONE,
    pos(-42, 0, -10),
    pos(42, 20, -14),
    FillOperation.Replace
    )
    _1 = -36
    for (let index = 0; index < 7; index++) {
        _2 = -10
        for (let index = 0; index < 5; index++) {
            shapes.circle(
            AIR,
            pos(_1, 12, _2),
            5,
            Axis.Z,
            ShapeOperation.Replace
            )
            _2 += -1
        }
        blocks.fill(
        AIR,
        pos(_1 + 5, 12, -10),
        pos(_1 - 5, 0, -14),
        FillOperation.Replace
        )
        _1 += 12
    }
    blocks.fill(
    WATER,
    pos(-41, 19, -11),
    pos(42, 20, -13),
    FillOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    pos(43, 0, -10),
    pos(46, -2, -14),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(44, 0, -11),
    pos(45, -1, -13),
    FillOperation.Replace
    )
})
player.onChat("mist_mal", function () {
    blocks.fill(
    WATER,
    pos(-25, -1, -1),
    pos(25, -1, -20),
    FillOperation.Replace
    )
    _1 = -36
    for (let index = 0; index < 7; index++) {
        blocks.fill(
        MOSS_STONE,
        pos(_1 - 6, 6, -10),
        pos(_1 - 6, -1, -16),
        FillOperation.Replace
        )
        blocks.fill(
        MOSS_STONE,
        pos(_1 + 6, 6, -10),
        pos(_1 + 6, -1, -16),
        FillOperation.Replace
        )
        _2 = -10
        blocks.fill(
        MOSS_STONE,
        pos(_1 - 6, 7, -10),
        pos(_1 + 6, 14, -16),
        FillOperation.Replace
        )
        for (let index = 0; index < 7; index++) {
            shapes.circle(
            AIR,
            pos(_1, 6, _2),
            5,
            Axis.Z,
            ShapeOperation.Replace
            )
            _2 += -1
        }
        _1 += 12
    }
    blocks.fill(
    COBBLESTONE,
    pos(-41, 14, -11),
    pos(42, 14, -15),
    FillOperation.Replace
    )
    blocks.fill(
    IRON_BARS,
    pos(-42, 15, -10),
    pos(42, 15, -10),
    FillOperation.Replace
    )
    blocks.fill(
    IRON_BARS,
    pos(-42, 15, -16),
    pos(42, 15, -16),
    FillOperation.Replace
    )
    _2 = -10
    for (let index = 0; index < 7; index++) {
        shapes.line(
        COBBLESTONE,
        pos(-56, 0, _2),
        pos(-42, 14, _2)
        )
        shapes.line(
        COBBLESTONE,
        pos(56, 0, _2),
        pos(42, 14, _2)
        )
        _2 += -1
    }
})
player.onChat("vodna_doroga", function () {
    blocks.fill(
    WATER,
    pos(-25, -1, -1),
    pos(25, -1, -20),
    FillOperation.Replace
    )
    _1 = -36
    for (let index = 0; index < 7; index++) {
        blocks.fill(
        MOSS_STONE,
        pos(_1 - 6, 12, -10),
        pos(_1 - 6, -1, -16),
        FillOperation.Replace
        )
        blocks.fill(
        MOSS_STONE,
        pos(_1 + 6, 12, -10),
        pos(_1 + 6, -1, -16),
        FillOperation.Replace
        )
        _2 = -10
        blocks.fill(
        MOSS_STONE,
        pos(_1 - 6, 13, -10),
        pos(_1 + 6, 20, -16),
        FillOperation.Replace
        )
        for (let index = 0; index < 7; index++) {
            shapes.circle(
            AIR,
            pos(_1, 12, _2),
            5,
            Axis.Z,
            ShapeOperation.Replace
            )
            _2 += -1
        }
        _1 += 12
    }
    blocks.fill(
    WATER,
    pos(-41, 19, -11),
    pos(42, 20, -15),
    FillOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    pos(43, 0, -10),
    pos(46, -2, -16),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(44, 0, -11),
    pos(45, -1, -15),
    FillOperation.Replace
    )
})
