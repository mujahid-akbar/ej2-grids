import { createElement } from '@syncfusion/ej2-base/dom';
import { Cell } from '../models/cell';
import { ICellRenderer } from '../base/interface';
import { IndentCellRenderer } from './indent-cell-renderer';

/**
 * ExpandCellRenderer class which responsible for building group expand cell. 
 * @hidden
 */
export class ExpandCellRenderer extends IndentCellRenderer implements ICellRenderer {
    /**
     * Function to render the expand cell
     * @param  {Cell} cell
     * @param  {Object} data      
     */
    public render(cell: Cell, data: { field: string, key: string }): Element {
        let node: Element = this.element.cloneNode() as Element;
        node.className = 'e-recordplusexpand';
        node.setAttribute('ej-mappingname', data.field);
        node.setAttribute('ej-mappingvalue', data.key);
        node.setAttribute('aria-expanded', 'true');
        node.appendChild(createElement('div', { className: 'e-icons e-gdiagonaldown e-icon-gdownarrow' }));
        return node;
    }

}