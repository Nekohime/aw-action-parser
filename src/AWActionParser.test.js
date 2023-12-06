import { AWActionParser } from './AWActionParser';

const parser = new AWActionParser();


test('multiple texture', () => {
    expect(parser.parse('create texture derp.jpg tag=0, texture derp2.jpg tag=1')).toStrictEqual({
        create: [
            {
                commandType: 'texture',
                texture: "derp.jpg",
                tag: 0,
            },
            {
                commandType: 'texture',
                texture: "derp2.jpg",
                tag: 1,
            },
        ],
    });
});
