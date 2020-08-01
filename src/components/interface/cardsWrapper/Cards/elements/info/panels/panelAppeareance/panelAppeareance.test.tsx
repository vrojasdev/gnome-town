import React from 'react';
import PanelAppeareance from './panelAppeareance';
import { render } from '@testing-library/react';
import { Appeareance } from '../../info';

const someProps:Appeareance = {
    age: 123,
    weight: 345.6789,
    height: 987.65432,
    hairColor: 'blue'
}

describe('PanelAppeareance Component', () => {
    let component:any;
    beforeEach(() => {
        const { container } = render(<PanelAppeareance appeareance={someProps} />);
        component = container;
    });

    test("renders the 4 rows of the data", () => {
        expect(component.querySelector('.appeareance')).not.toBe(null);
        expect(component.querySelector('.row')).not.toBe(null);
        expect(component.querySelector('.label')).not.toBe(null);
        expect(component.querySelector('.data')).not.toBe(null);
    });

    test("display the data correctly", () => {
        expect(component.querySelector('.row:first-child .data').textContent).toBe("123 y/o");
        expect(component.querySelector('.row:nth-child(2) .data').textContent).toBe("345.68 kg");
        expect(component.querySelector('.row:nth-child(3) .data').textContent).toBe("9.88 m");
        expect(component.querySelector('.row:last-child .data').textContent).toBe("blue");
    });

});