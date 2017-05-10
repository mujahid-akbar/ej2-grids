import { Component, ModuleDeclaration, L10n, EmitType } from '@syncfusion/ej2-base';
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Pager
 */
export interface PagerModel extends ComponentModel{

    /**
     * If `enableQueryString` set to true,   

    /**
     * If `enableExternalMessage` set to true, then it adds the message to Pager.  

    /**
     * If `enablePagerMessage` set to true, then it adds the pager information.  

    /**
     * Defines the records count of visible page.  

    /**
     * Defines the number of pages to display in pager container.   

    /**
     * Defines the current page number of pager.   

    /**
     * Gets or Sets the total records count which is used to render numeric container.   

    /**
     * Defines the external message of Pager.  

    /**
     * Defines the customized text to append with numeric items.  

    /**
     * Triggers when click on the numeric items.   

    /**
     * Triggers when Pager is created.   

}