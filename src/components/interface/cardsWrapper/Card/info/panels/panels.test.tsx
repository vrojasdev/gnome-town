import React from 'react';
import Panels, { PanelsProps } from './panels';
import { render } from '@testing-library/react';
import { Appeareance } from '../info';


describe('Panel Component', () => {
    const initAppeareance:Appeareance = {
        age: 1,
        weight: 12,
        height:23,
        hairColor: 'red'
    };
    const initProps:PanelsProps = {
        active: 0,
        appeareance: initAppeareance,
        professions: [],
        friends: []
    }

    test('it renders at least the component', () => {
        const { container } = render(<Panels {...initProps}  />);
        expect(container.querySelector('.panels')).not.toBe(null);
    });

    test('it renders the first panel - Appeareance', () => {
        const { container } = render(<Panels {...initProps}  />);
        expect(container.querySelector('.appeareance')).not.toBe(null);
        expect(container.querySelector('.professions')).toBe(null);
        expect(container.querySelector('.friends')).toBe(null);
    });

    test('it renders the second panel - Professiosns', () => {
        const { container } = render(<Panels {...initProps} active={1} />);
        expect(container.querySelector('.appeareance')).toBe(null);
        expect(container.querySelector('.professions')).not.toBe(null);
        expect(container.querySelector('.friends')).toBe(null);
    });

    test('it renders the first panel - Friends', () => {
        const { container } = render(<Panels {...initProps} active={2}  />);
        expect(container.querySelector('.appeareance')).toBe(null);
        expect(container.querySelector('.professions')).toBe(null);
        expect(container.querySelector('.friends')).not.toBe(null);
    });
});