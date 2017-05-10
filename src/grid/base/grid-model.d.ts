import { Component, ModuleDeclaration, ChildProperty, compile as templateComplier, Browser } from '@syncfusion/ej2-base';
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class SortDescriptor
 */
export interface SortDescriptorModel {

    /**
     * Defines the field name of sort column. 

    /**
     * Defines the direction of sort column. 

}

/**
 * Interface for a class SortSettings
 */
export interface SortSettingsModel {

    /**
     * Specifies the columns to sort at initial rendering of Grid.

}

/**
 * Interface for a class Predicate
 */
export interface PredicateModel {

    /**
     * Defines the field name of filter column.  

    /**
     * Defines the operator by how to filter records. The available operators and its supported data types are 

    /**
     * Defines the value which is used to filter records. 

    /**
     * If match case set to true, then filter records with exact match or else  

    /**
     * Defines the relationship between one filter query with another by using AND or OR predicate.   

    /**
     * @hidden 

    /**
     * @hidden 

}

/**
 * Interface for a class FilterSettings
 */
export interface FilterSettingsModel {

    /**
     * Specifies the columns to filter at initial rendering of Grid.  

    /**
     * @hidden 

    /**
     * Defines the filter bar modes. The available options are  

    /**
     * Shows or hides the filtered status message in the pager.  

    /**
     * Defines the delay (in milliseconds) to filter records when the `Immediate` mode of filter bar is set. 

}

/**
 * Interface for a class SelectionSettings
 */
export interface SelectionSettingsModel {

    /**
     * Grid supports row, cell and both(row and cell) selection mode. 

    /**
     * The cell selection modes are flow and box. It requires the selection 

    /**
     * Defines options for selection type. They are 

}

/**
 * Interface for a class SearchSettings
 */
export interface SearchSettingsModel {

    /**
     * Specifies the collection of fields which is included in search operation. By default, bounded columns of the Grid are included.  

    /**
     * Specifies the key value to search Grid records. 

    /**
     * Defines the operator by how to search records. The available operators are 

    /**
     * If `ignoreCase` set to false, then search records with exact match or else  

}

/**
 * Interface for a class RowDropSettings
 */
export interface RowDropSettingsModel {

    /**
     * Defines the ID of EJ2 droppable control on which row drop should occur.   

}

/**
 * Interface for a class GroupSettings
 */
export interface GroupSettingsModel {

    /**
     * If `showDropArea` set to true, then the group drop area element will be visible at the top of Grid.     

    /**
     * If `showToggleButton` set to true, then the group toggle button will be showed which can be used to group

    /**
     * If `showGroupedColumn` set to false, then it hides the grouped column after group.  

    /**
     * If `showUngroupButton` set to false, then ungroup button is hidden in dropped element.  

    /**
     * Specifies the column names to group at initial rendering of Grid.  

}

/**
 * Interface for a class Grid
 */
export interface GridModel extends ComponentModel{

    /**
     * Defines the schema of dataSource. 

    /**
     * If `enableAltRow` set to true, then grid renders row with alternate row styling.   

    /**
     * If `enableHover` set to true, then the row hover will be enabled in Grid.

    /**
     * Enables or disables the key board interaction of Grid.     

    /**
     * If `allowTextWrap` set to true,  

    /**
     * If `allowPaging` set to true, then the pager renders at the footer of Grid. It is used to handle page navigation in Grid.   

    /**
     * Configures the pager in the Grid.  

    /**
     * Configures the search behavior in the Grid. 

    /**
     * If `allowSorting` set to true, then it will allow the user to sort grid records when click on the column header.  

    /**
     * Configures the sort settings.  

    /**
     * If `allowSelection` set to true, then it will allow the user to select(highlight row) Grid records by click on it.  

    /**
     * Sets a row selection by Index.

    /**
     * Configures the selection settings.  

    /**
     * If `allowFiltering` set to true, then it will allow the user to filter grid records with required criteria.    

    /**
     * If `allowReordering` set to true, then the Grid columns can be reordered. 

    /**
     * If `allowRowDragAndDrop` set to true, then it will allow the user to drag grid rows and drop to another grid.    

    /**
     * Configures the row drop settings.  

    /**
     * Configures the filter settings of Grid.  

    /**
     * If `allowGrouping` set to true, then it will allow the user to dynamically group or ungroup columns.  

    /**
     * Configures the group settings. 

    /**
     * Defines the scrollable height of the grid content.    

    /**
     * Defines the scrollable width of the grid content.    

    /**
     * Defines the grid lines mode. The available modes are   

    /**
     * Defines the row template as string or element selector which is used to render rows as template. <br>

    /**
     * Defines the print modes. The available print modes are   

    /**
     * It is used to render grid table rows. 

    /**
     * Defines the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html) 

    /**
     * Triggers when Grid is created.

    /**
     * Triggers when Grid is destroyed. 

    /**
     * This allows any customization of Grid properties before rendering. 

    /**
     * Triggered every time a request is made to access row information, element and data. 

    /**
     * Triggered every time a request is made to access cell information, element and data.

    /**
     * Triggers when Grid actions such as Sorting, Filtering, Paging and Grouping etc., starts. 

    /**
     * Triggers when Grid actions such as Sorting, Filtering, Paging and Grouping etc., completed. 

    /**
     * Triggers when any Grid actions failed to achieve desired results. 

    /**
     * Triggers when data source is populated in the Grid.

    /**
     * Triggers before any row selection occurs.

    /**
     * Triggers after any row is selected.

    /**
     * Trigger before any particular selected row is deselecting.

    /**
     * Triggers when any particular selected row is deselected.

    /**
     * Triggers before any cell selection occurs.

    /**
     * Triggers after any cell is selected.

    /**
     * Trigger before any particular selected cell is deselecting.

    /**
     * Triggers when any particular selected cell is deselected.

    /**
     * Triggers when a column header element is dragged. 

    /**
     * Triggers when a column header element is dragged (moved) continuously. 

    /**
     * Triggers when a column header element is dropped on target column. 

    /**
     * Triggers after print action completed.  

    /**
     * Triggers before the print action starts.  

}