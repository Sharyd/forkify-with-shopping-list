import View from './view.js';
import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';

class addShoppingList extends View {
  _parentElement = document.querySelector('.shopping__list');
  _errorMessage = 'No shopping list is rendered';
  _message = '';

  // constructor() {
  //   super();

  //   this.addHandlerBtnDelete();
  // }
  addHandlerBtnDelete(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const el = e.target.closest('.shopping__item');
      const { id } = el.dataset;
      const btn = e.target.closest('.shopping__delete');
      console.log(e.target);
      if (btn) {
        el.remove();
      }

      if (!btn) return;
      handler(id);
    });
  }
  _generateMarkup() {
    return this._data
      .map(ing => {
        return `
        <li class="shopping__item" data-id ="${ing.id}">
          <div class="shopping__count">
          <input type="number" value="${ing.quantity}" step="${ing.quantity}"  min="0" class="shopping__count-value">
          <p>${ing.unit}</p>
          </div>
          <p class="shopping__description">${ing.description}</p>
           <button class="shopping__delete btn-tiny">
              <span class="shopping__icon-cross">+</span>
           </button>
           </li>
      `;
      })
      .join('');
  }
}
export default new addShoppingList();
