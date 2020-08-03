import React from 'react';
import PanelFriends from './panelFriends';
import { render } from '@testing-library/react';

const noFriends:Array<string> = [];
const someFriends:Array<string> = ['Friend 1', 'Friend 2', 'Friend 3'];

describe('PanelFriends Component', () => {

    describe('NO friends', () => {
        test("it should render a div with class 'friends' with an image inside", () => {
            const { container } = render(<PanelFriends friends={noFriends} />);
            expect(container.querySelector('.friends')).not.toBe(null);
            expect(container.querySelector('.row')).toBe(null);
            expect(container.querySelector('.friends img')).not.toBe(null);
        })
    });

    describe('WITH friends', () => {        
        let component:any;
        beforeEach(() => {
            const { container } = render(<PanelFriends friends={someFriends} />);
            component = container;
        });

        test("with 3 friends it renders 3 rows of the data", () => {
            expect(component.querySelector('.friends')).not.toBe(null);
            expect(component.querySelector('.friends img')).toBe(null);
            expect(component.querySelector('.row')).not.toBe(null);
            expect(component.querySelector('.friends').children.length).toBe(3);
        });

        test("display the data correctly", () => {
            expect(component.querySelector('.row:first-child').textContent).toBe("Friend 1");
            expect(component.querySelector('.row:nth-child(2)').textContent).toBe("Friend 2");
            expect(component.querySelector('.row:last-child').textContent).toBe("Friend 3");
        });

    });
});