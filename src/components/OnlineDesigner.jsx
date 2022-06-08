import { Component, PropsWithChildren, ReactNode } from 'react'
import '@grapecity/spread-sheets-designer-resources-cn';
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css"
import '@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css'
import "@grapecity/spread-sheets-tablesheet";
import "@grapecity/spread-sheets-barcode";
import "@grapecity/spread-sheets-charts";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-languagepackages";
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-pdf";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-resources-zh";
import "@grapecity/spread-sheets-designer-resources-cn";
import * as GCDesigner from '@grapecity/spread-sheets-designer';
import "@grapecity/spread-sheets-resources-zh"
import GC from "@grapecity/spread-sheets"
import { Designer } from '@grapecity/spread-sheets-designer-react';
GC.Spread.Common.CultureManager.culture('zh-cn')


export default class OnlineDesigner extends Component{
  constructor(props){
    super(props)
    this.designer = null
  }

  designerInitialized = (designer) => {
    this.designer = designer
    console.log(designer)
    // 获取与designer相关联的工作簿(Spread)
    let spread = this.designer.getWorkbook()
    let sheet = spread.getActiveSheet()
    //设置数值
    sheet.setValue(0,0,'Hello Grapecity')
    //设置行高
    sheet.setColumnWidth(0,120)
    //设置区域内容
    sheet.setArray(1,0,[[2,3,5]])
    //设置公式
    sheet.setFormula(3,0,'=sum(A2:C2)')

  }

  render(){
      return(
          <Designer
            spreadOptions={{sheetCount: 3}} 
            styleInfo={{height: '98vh'}}
            designerInitialized = {this.designerInitialized}
          />
      )
  }
}


