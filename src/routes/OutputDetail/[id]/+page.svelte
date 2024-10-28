<XpProgTitle title='出貨單明細'/>
<div class="row">
    <div class={_Xp.clsLabel}>出貨單號：</div>
    <div class={_Xp.clsData}>{row.Id || ''}
        <a class='btn btn-primary' href='/EtherTx/Out/{row.Id}' class:disabled={!txStatus}>區塊鏈</a>
    </div>
    <div class={_Xp.clsLabel}>來源活動單：</div>
    <div class={_Xp.clsData}>{row.ActId || ''}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>實際出貨時間：</div>
    <div class={_Xp.clsData}>{row.OutputTime || ''}</div>
    <div class={_Xp.clsLabel}>建檔時間：</div>
    <div class={_Xp.clsData}>{row.Created || ''}</div>
</div>

<div class='mt-3 mb-2 xp-prog'>出貨物品清單 (總共{items.length}筆)：</div>
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
    $: txStatus = (row.TxUpTime != '');

    //table columns
    let cols:ColDto[] = [
        { title:'物品名稱', fid:'ItemName' }, 
        { title:'出貨數量', fid:'Amount'},
        { title:'單位', fid:'Unit' }, 
    ];

    let items:any[] = [];   //物品

    onMount(async()=> { 
        row = await _Ajax.getJsonA('/Output/Detail', false, {id:params.id}) || {};
        items = _Json.getChildRows(row, 0) || [];
    });

</script>