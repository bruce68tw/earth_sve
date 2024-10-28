<XpProgTitle title='入庫單明細'/>
<div class="row">
    <div class={_Xp.clsLabel}>入庫單號：</div>
    <div class={_Xp.clsData}>{row.Id || ''}
        <!--
        <button type='button' class='btn btn-primary' on:click={onTxA} disabled={!txStatus}>區塊鏈</button>
        -->
        <a class='btn btn-primary' href='/EtherTx/In/{row.Id}' class:disabled={!txStatus}>區塊鏈</a>
    </div>
    <div class={_Xp.clsLabel}>捐贈單號：</div>
    <div class={_Xp.clsData}>{row.DonateId || ''}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>審核狀態：</div>
    <div class={_Xp.clsData}>{_Xp.auditStatusName(row) || ''}</div>
    <div class={_Xp.clsLabel}>建檔時間：</div>
    <div class={_Xp.clsData}>{row.Created || ''}</div>
</div>

<div class='mt-3 mb-2 xp-prog'>入庫物品清單 (總共{items.length}筆)：</div>
<XgTable {cols} rows={items}/>

<script lang='ts'>
    import { onMount } from "svelte";
    import type ColDto from "@base/dto/ColDto";
    import XpProgTitle from "@/lib/XpProgTitle.svelte";
    import XgTable from "@base/lib/XgTable.svelte";
    import _Ajax from "@base/ts/_Ajax";
    import _Json from "@base/ts/_Json";
    import _Xp from "@/ts/_Xp";

    //route 傳入參數: id
    export let params:any = {};

    //form row
    let row:any = {};

    //txStatus
    $: txStatus = (row.AuditStatus == 'Y' && row.TxUpTime != '');

    //table columns
    let cols:ColDto[] = [
        { title:'物品名稱', fid:'ItemName' }, 
        { title:'入庫數量', fid:'Amount'},
        { title:'單位', fid:'Unit' }, 
    ];

    let items:any[] = [];   //物品

    onMount(async()=> { 
        row = await _Ajax.getJsonA('/Input/Detail', false, {id:params.id}) || {};
        items = _Json.getChildRows(row, 0) || [];
    });

    /*
    //onclick Tx
    async function onTxA():Promise<void>{
        //get db row
        let json = {
        TxHash: row.TxHash,
        TxLog: row.TxLog,
        TxLogSource: await _Ajax.getJsonA('/Input/GetTxLogSource', false, { key: row.Id }),
        };
        modalTx.open(json);
    }
    */

</script>