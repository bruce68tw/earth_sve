/* eslint-disable @typescript-eslint/no-explicit-any */
import _Code from '@base/ts/_Code';
//import _Fun from '@base/ts/_Fun'
import _XpCode from './_XpCode';
//import _Audit from './_Audit';
//import type XgDatatable from '@base/lib/XgDatatable.svelte';
//import _Tool from '@base/ts/_Tool';
import _Str from '@base/ts/_Str';
import _Ajax from '@base/ts/_Ajax';

//static class
export default class _Xp {
    //static readonly systemName = 'Earth 救助系統';
    static readonly btnSendAudit = '送出';

    //明細畫面欄位, RWD, 加上 xp-field-high for 全局設定最小高度
    static readonly clsLabel = 'col-3 col-md-2 xi-label xp-detail-high';
    static readonly clsData = 'col-9 col-md-4 xi-read xp-detail-high';

    //get from config
    static md5Url = '';         //md5 checker url
    static txUrl = '';          //ether block viewer url
    static hasEther = false;    //是否有以太坊、NFT功能

    static userName = '';
    static userId = '';         //for 捐贈/志工時需要唯一代碼產生CAPTCHA 圖檔

    //static yesNo = _XpCode.yesNo();
    static auditStatus = _XpCode.auditStatus();
    static inputStatus = _XpCode.inputStatus();
    
    /**
     * get audit name by auditStatus
     * @param row 
     * @param color (false)
     * @returns 
     */
    static auditStatusName(row:any, color=false):string {
        const status = row.AuditStatus;
        const name = _Code.findStr(_Xp.auditStatus, status);
        return !color ? name :
            (status == 'Y') ? `<span class='xg-green'>${name}</span>` :
            (status == 'N') ? `<span class='xg-red'>${name}</span>` : name;
    } 
    
    static inputStatusName(row:any):string {        
        return _Code.findStr(_Xp.inputStatus, row.InputStatus);
    }

    static async getCapichaImage():Promise<void> {        
        if (this.userId != '') 
            this.userId = _Str.newId();

        await _Ajax.getStrA('/Xp/Captcha', false, {id: this.userId});
        //return _Code.findStr(_Xp.inputStatus, row.InputStatus);
    }

    /*
    static yesNoName(value:any):string {        
        return _Code.findStr(_Xp.yesNo, value.toString());
    }
    static statusName(status:number):string {        
        return (status == 1) ? '正常' : '停用';
    }
    
    //get audits by isNew
    static getAuditsByNew(isNew:boolean):IdStrDto[] {
        return _XpCode.auditStatuses(isNew ? 'C' : '');
    }
    */
   
    /**
     * get edit funs by isNew & auditStatus
     * @param isNew 
     * @param auditStatus 
     * @returns 
     */
    static getFunsByNew(isNew:boolean, auditStatus:string):string {
        return (isNew || auditStatus == '0') ? 'CU' : 'C';
    }
    
    /*
    //onchange item.TypeId
    static resetItem(row:any){
        row.ItemId = '';
        row.Unit = '';
        row.StockAmount = 0;
        row.StockWayAmount = 0;
        row.PlanAmount = 0;
    }
    static setItem(row:any, item:any){
        row.Unit = item.Unit;
        row.StockAmount = item.StockAmount;
        row.StockWayAmount = item.StockWayAmount;
        row.PlanAmount = item.PlanAmount;
    }

    static isAudit(row:any):boolean {
        return (row.AuditStatus == 'Y');
    }
    static notAudit(row:any):boolean {
        return !_Xp.isAudit(row);
    }

    static dtAuditStatus():any {
        return { title:'審核狀態', fid:'AuditStatus', sortFid:'AuditStatus', 
            render:(row)=> _Audit.statusNameR(row)};
    }
    */
   
    /**
     * XgDatatable check error result
     * @param dt 
     * @param error 
     * @param msgOk 
     * @returns 
     */
    /*
    static async dtCheckErrorA(dt:XgDatatable, error:string, msgOk:string):Promise<void> {
        if (error === null) return;
        if (error == ''){
            await dt.reloadA(false);
            _Tool.msg(msgOk);
        } else {
            _Tool.msg(error);
        }
    }
    */

    /*
    //上鏈時間, 配合db欄位名稱TxUpTime
    static dtTxUpTime():any {
        return { title:'上鏈時間', fid:'_swap', render:(row)=> 
            (!_Xp.hasBlock || row.AuditStatus != 'Y') ? '' :
            row.TxUpTime == '' ? 'b:上鏈' : 'f:TxUpTime' };
    }
    */
}