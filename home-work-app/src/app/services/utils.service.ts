import $ from 'jquery';

export const removeModalPortal = (): void => {
    $('#modalPortal').remove();
    $('#root').removeClass('blurred');
};