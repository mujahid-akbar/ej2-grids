import { isNullOrUndefined } from '@syncfusion/ej2-base/util';
import { IGrid } from '../base/interface';
import { formatUnit } from '@syncfusion/ej2-base/util';
import { columnWidthChanged } from '../base/constant';
import { Column } from '../models/column';

/**
 * ColumnWidthService
 * @hidden
 */
export class ColumnWidthService {
    private parent: IGrid;

    constructor(parent: IGrid) {
        this.parent = parent;
    }

    public setWidthToColumns(): void {
        if (this.parent.allowGrouping) {
            for (let i: number = 0, len: number = this.parent.groupSettings.columns.length; i < len; i++) {
                this.setColumnWidth(new Column({ width: '30px' }), i);
            }
        }
        (<Column[]>this.parent.getColumns()).forEach((column: Column) => {
            this.setColumnWidth(column);
        });
    }

    public setColumnWidth(column: Column, index?: number): void {
        let columnIndex: number = isNullOrUndefined(index) ? this.parent.getNormalizedColumnIndex(column.uid) : index;
        let cWidth: string | number = column.width;

        if (!isNullOrUndefined(cWidth)) {
            this.setWidth(cWidth, columnIndex);

            this.parent.notify(columnWidthChanged, { index: columnIndex, width: cWidth, column: column });
        }
    }

    private setWidth(width: string | number, index: number): void {
        let header: Element = this.parent.getHeaderTable();
        let content: Element = this.parent.getContentTable();
        let fWidth: string = formatUnit(width);
        (<HTMLTableColElement>header.querySelector('colgroup').children[index]).style.width = fWidth;
        (<HTMLTableColElement>content.querySelector('colgroup').children[index]).style.width = fWidth;
    }

    public getSiblingsHeight(element: HTMLElement): number {
        let previous: number = this.getHeightFromDirection(element, 'previous');
        let next: number = this.getHeightFromDirection(element, 'next');
        return previous + next;
    }

    private getHeightFromDirection(element: HTMLElement, direction: string): number {
        let sibling: HTMLElement = element[direction + 'ElementSibling'];
        let result: number = 0;

        while (sibling) {
            result += sibling.offsetHeight;
            sibling = sibling[direction + 'ElementSibling'];
        }

        return result;
    }
}