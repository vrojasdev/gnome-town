import React from 'react';
import Thumbnail, { ThumbnailProps } from './thumbnail';
import { render } from '@testing-library/react';

describe('Thumbnail Component', () => {    
    const initProps:ThumbnailProps = {
        thumbnail: 'http://localhost/img_src.png', // passing an absolute path
        inPreview: false
    }

    test('it renders the component', () => {
        const { container, getByAltText } = render(<Thumbnail {...initProps} />);
        expect(container.querySelector('.thumbnail')).not.toBe(null);
        expect(container.querySelector('.preview')).toBe(null);
        expect(container.querySelector('img').src).toBe('http://localhost/img_src.png');
        expect(getByAltText('gnome picture')).not.toBe(null);
    });

    test('the component contains the class "preview" when this is passed in the props', () => {
        const { container } = render(<Thumbnail {...initProps} inPreview={true} />);
        expect(container.querySelector('.preview')).not.toBe(null);
    });
})