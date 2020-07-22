import React from 'react';
import PanelProfessions from './panelProfessions';
import { render } from '@testing-library/react';

const noProfessions:Array<string> = [];
const someProfessions:Array<string> = ['Profession 1', 'Profession 2', 'Profession 3', 'Profession 4', 'Profession 5'];

describe('PanelFriends Component', () => {

    describe('NO professions', () => {
        test("it should render an empty div with class 'professions'", () => {
            const { container } = render(<PanelProfessions professions={noProfessions} />);
            expect(container.querySelector('.professions').children.length).toBe(0);
            expect(container.querySelector('.row')).toBe(null);
        })
    });

    describe('WITH professions', () => {        
        let component:any;
        beforeEach(() => {
            const { container } = render(<PanelProfessions professions={someProfessions} />);
            component = container;
        });

        test("with 5 professions it renders 3 rows of the data", () => {
            expect(component.querySelector('.professions')).not.toBe(null);
            expect(component.querySelector('.row')).not.toBe(null);
            expect(component.querySelector('.professions').children.length).toBe(5);
        });

        test("display the data correctly", () => {
            expect(component.querySelector('.row:first-child').textContent).toBe("Profession 1");
            expect(component.querySelector('.row:nth-child(2)').textContent).toBe("Profession 2");
            expect(component.querySelector('.row:nth-child(3)').textContent).toBe("Profession 3");
            expect(component.querySelector('.row:nth-child(4)').textContent).toBe("Profession 4");
            expect(component.querySelector('.row:last-child').textContent).toBe("Profession 5");
        });

    });
});