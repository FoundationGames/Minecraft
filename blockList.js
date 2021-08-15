const blockList = [
    {
        name: 'Air',
        xshape: false,
        id: 0
    },
    {//1
        id: 1,
        pic: 'dirt.png',
        name: 'Dirt',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//2
        id: 2,
        pic: 'grass_block_top.png',
        name: 'Grass',
        multiside: true,
        xshape: false,
    transparent: false,
        sides: {
            0: 'grass_block_side.png',
            1: 'grass_block_side.png',
            2: 'grass_block_side.png',
            3: 'grass_block_side.png',
            4: 'grass_block_top.png',
            5: 'dirt.png',
        }
    },
    {//3
        id: 3,
        pic: 'stone.png',
        name: 'Stone',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//4
        id: 4,
        pic: 'cobblestone.png',
        name: 'Cobblestone',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//5
        id: 5,
        pic: 'sand.png',
        name: 'Sand',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//6
        id: 6,
        pic: 'bedrock.png',
        name: 'Bedrock',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//7
        id: 7,
        pic: 'oak_planks.png',
        name: 'Planks',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//8
        id: 8,
        pic: 'oak_log.png',
        name: 'Tree Log',
        multiside: true,
        xshape: false,
        transparent: false,
        sides: {
            0: 'oak_log.png',
            1: 'oak_log.png',
            2: 'oak_log.png',
            3: 'oak_log.png',
            4: 'oak_log_top.png',
            5: 'oak_log_top.png',
        }
    },
    {//9
        id: 9,
        pic: 'oak_leaves.png',
        name: 'Leaves',
        multiside: false,
        xshape: false,
        transparent: true
    },
    {//10
        id: 10,
        pic: 'oak_sapling.png',
        name: 'Sapling',
        multiside: false,
        xshape: true,
        transparent: false
    },
    {//11
        id: 11,
        pic: 'cobblestone_red.png',
        name: 'Red Cobblestone',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//12
        id: 12,
        pic: 'cobblestone_blue.png',
        name: 'Blue Cobblestone',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//13
        id: 13,
        pic: 'cobblestone_green.png',
        name: 'Green Cobblestone',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {//14
        id: 14,
        pic: 'cobblestone_yellow.png',
        name: 'Yellow Cobblestone',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {
        id: 15,
        pic: 'glass.png',
        name: 'Glass',
        multiside: false,
        xshape: false,
        transparent: true
    },
    {
        id: 16,
        pic: 'cyan_flower.png',
        name: 'Cyan Flower',
        multiside: false,
        xshape: true,
        transparent: false
    },
    {
        id: 17,
        pic: 'concern.png',
        name: 'Block of Concern',
        multiside: false,
        xshape: false,
        transparent: false
    },
    {
        id: 18,
        pic: 'chain.png',
        name: 'Chain',
        multiside: false,
        xshape: true,
        transparent: false
    },
    {
        id: 19,
        pic: 'bush_plant.png',
        name: 'Bush',
        multiside: false,
        xshape: false,
        transparent: true,
        quads: [
            {pic: 'bush_plant.png',ext: 0,yaw: 45,pitch: 0},
            {pic: 'bush_plant.png',ext: 0,yaw: 135,pitch: 0},
            {pic: 'bush_side.png',ext: 50,yaw: 0,pitch: 0},
            {pic: 'bush_side.png',ext: 50,yaw: 90,pitch: 0},
            {pic: 'bush_side.png',ext: 50,yaw: 180,pitch: 0},
            {pic: 'bush_side.png',ext: 50,yaw: 270,pitch: 0},
            {pic: 'bush_top.png',ext: 50,yaw: 0,pitch: 90}
        ]
    },
    {
        id: 20,
        pic: 'lantern_side.png',
        name: 'Lantern',
        multiside: false,
        xshape: false,
        transparent: true,
        quads: [
            {pic: 'lantern_hook.png',ext: 0,yaw: 45,pitch: 0},
            {pic: 'lantern_hook.png',ext: 0,yaw: 135,pitch: 0},
            {pic: 'lantern_side.png',ext: 18,yaw: 0,pitch: 0},
            {pic: 'lantern_side.png',ext: 18,yaw: 90,pitch: 0},
            {pic: 'lantern_side.png',ext: 18,yaw: 180,pitch: 0},
            {pic: 'lantern_side.png',ext: 18,yaw: 270,pitch: 0},
            {pic: 'lantern_top_side.png',ext: 12,yaw: 0,pitch: 0},
            {pic: 'lantern_top_side.png',ext: 12,yaw: 90,pitch: 0},
            {pic: 'lantern_top_side.png',ext: 12,yaw: 180,pitch: 0},
            {pic: 'lantern_top_side.png',ext: 12,yaw: 270,pitch: 0},
            {pic: 'lantern_end.png',ext: 50,yaw: 0,pitch: 270},
            {pic: 'lantern_end.png',ext: -6,yaw: 0,pitch: 90},
            {pic: 'lantern_top.png',ext: 6,yaw: 0,pitch: 90}
        ]
    },
    {
        id: 20,
        pic: 'potato_front.png',
        name: 'Tiny Potato',
        multiside: false,
        xshape: false,
        transparent: true,
        quads: [
            {pic: 'potato_front.png',ext: 12,yaw: 0,pitch: 0},
            {pic: 'potato_side.png',ext: 12,yaw: 90,pitch: 0},
            {pic: 'potato_side.png',ext: 12,yaw: 180,pitch: 0},
            {pic: 'potato_side.png',ext: 12,yaw: 270,pitch: 0},
            {pic: 'potato_top.png',ext: -12,yaw: 0,pitch: 90},
            {pic: 'potato_top.png',ext: 50,yaw: 0,pitch: 270}
        ]
    },
    {
        id: 20,
        pic: 'pineapple_side.png',
        name: 'Pineapple',
        multiside: false,
        xshape: false,
        transparent: true,
        quads: [
            {pic: 'pineapple_side.png',ext: 28,yaw: 0,pitch: 0},
            {pic: 'pineapple_side.png',ext: 28,yaw: 90,pitch: 0},
            {pic: 'pineapple_side.png',ext: 28,yaw: 180,pitch: 0},
            {pic: 'pineapple_side.png',ext: 28,yaw: 270,pitch: 0},
            {pic: 'pineapple_face.png',ext: 30,yaw: 0,pitch: 0},
            {pic: 'pineapple_top.png',ext: 0,yaw: 0,pitch: 90},
            {pic: 'pineapple_top.png',ext: 50,yaw: 0,pitch: 270},
            {pic: 'pineapple_stem.png',ext: 0,yaw: 45,pitch: 0},
            {pic: 'pineapple_stem.png',ext: 0,yaw: 135,pitch: 0}
        ]
    }
];