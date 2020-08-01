import React from 'react';
import CardWithDetails, { CardWithDetailsProps } from './CardWithDetails';
import { render } from '@testing-library/react';
import { Gnome } from '../../../../../redux';

const gnome:Gnome = {
    id: 0,
    name: 'Gnome',
    thumbnail: 'http://localhost/img_src.png',
    age: 100,
    weight: 200,
    height: 300,
    hair_color: 'red',
    professions: [],
    friends: []
}

const initProps:CardWithDetailsProps = {
    index: 0,
    info: gnome
}

describe('CardWithDetails Component', () => {

    test('it renders the component', () => {
        const { container } = render(<CardWithDetails {...initProps} />);

        expect(container.querySelector('.cardWithDetails')).not.toBe(null);
        expect(container.querySelector('.name')).not.toBe(null);
        expect(container.querySelector('.thumbnail')).not.toBe(null);
        expect(container.querySelector('.info')).not.toBe(null);
    });

})