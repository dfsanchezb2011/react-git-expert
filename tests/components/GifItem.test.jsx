import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('GifItem Component Tests', () => {

    let image = {
        title: 'Mash Up Pokemon GIF by Mic',
        urlImg: 'https://media0.giphy.com/media/Yrjxrzz4uFENG/giphy.gif?cid=dbe5ecd7ijba4oi6kobsj10vnl07gv2eoad4x0pad3j0i3ln&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        /* id: 'Yrjxrzz4uFENG', */
    }

    test('Test 1. Snapshot - Must match with the snapshot', () => {
        const { container } = render(
            <GifItem {...image} />
        );

        expect(container).toMatchSnapshot();
    });

    test('Test 2. Must show the image with the props passed (URL and ALT)', () => {
        render(<GifItem {...image} />);
        /* screen.debug(); */
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(image.urlImg);
        expect(alt).toBe(image.title);
    });

    test('Test 3. Must show the title inside the component', () => {
        render(<GifItem {...image} />);
        expect(screen.getByText(image.title)).toBeTruthy();
    })
});