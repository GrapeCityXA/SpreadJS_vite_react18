import {Component} from 'react'
import GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-resources-zh';
GC.Spread.Common.CultureManager.culture("h-zcn");
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';

export default class OnlineSpread extends Component {
    constructor(props) {
        super(props);
        this.spread = null;
    }
    initSpread(spread) {
        this.spread = spread;
         //设置当前spread中工作表的数量
        this.spread.setSheetCount(2)
        //获取第一个工作表
        let sheet = spread.getSheet(0)   //or let sheet = spread.getSheetFromName('Sheet1')
        //设置列宽
        sheet.setColumnWidth(0,150)    //第一个参数为列索引，第二个参数为列宽

        //单个单元格设置值
        sheet.setValue(0,0,'Hello Grapecity')   //参数依次表示行索引、列索引、内容

        //设置单元格公式
        sheet.setFormula(0,1,'=SUM(A2:A5)')      //参数依次为行索引、列索引、公式

        //设置区域内容
        //表示从行索引为2，列索引为0的单元格开始,设置2行3列的数据
        sheet.setArray(2,0,[[1,'hello','grapecity'],[2,'hello','javascript']])  

        //设置文字颜色
        sheet.getCell(2,1).foreColor('#f00')
    }

    render(){
        return(
            <SpreadSheets workbookInitialized={spread=>this.initSpread(spread)}>
                <Worksheet>
                </Worksheet>
            </SpreadSheets>
        )
    }
   
}
