<XpProgTitle title='捐贈單明細'/>
<div class="row">
    <div class={_Xp.clsLabel}>捐贈單號：</div>
    <div class={_Xp.clsData}>{row.Id}</div>
    <div class={_Xp.clsLabel}>捐贈人：</div>
    <div class={_Xp.clsData}>{row.DonorName}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>捐贈說明：</div>
    <div class={_Xp.clsData}>{row.Title || ''}</div>
    <div class={_Xp.clsLabel}>預計到貨日：</div>
    <div class={_Xp.clsData}>{row.PlanDate || ''}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>審核狀態：</div>
    <div class={_Xp.clsData}>{_Xp.auditStatusName(row) || ''}</div>
    <div class={_Xp.clsLabel}>入庫狀態：</div>
    <div class={_Xp.clsData}>{_Xp.inputStatusName(row) || ''}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>建檔時間：</div>
    <div class={_Xp.clsData}>{row.Created || ''}</div>
</div>

<div class='mt-3 mb-2 xp-prog'>捐贈物品清單 (總共{items.length}筆)：</div>
<XgTable {cols} rows={items}/>
<hr class='xg-sm-hide'>

<div class='mt-3 mb-2 xp-prog'>入庫單 (總共{inputs.length}筆)：</div>
{#each inputs as input}
    <div><a href='/InputDetail/{input.Id}'>{input.Id}</a></div>
{/each}

<script lang='ts'>
    import { onMount } from "svelte";
    import type ColDto from "@base/dto/ColDto";
    import XpProgTitle from "@/lib/XpProgTitle.svelte";
    import XgTable from "@base/lib/XgTable.svelte";
    import _Ajax from "@base/ts/_Ajax";
    import _Json from "@base/ts/_Json";
    import _Xp from "@/ts/_Xp";

    //route 傳入參數:id
    export let params:any = {};

    //form row
    let row:any = {};

    //table columns
    let cols:ColDto[] = [
        { title:'物品名稱', fid:'ItemName' }, 
        { title:'捐贈數量', fid:'Amount'},
        { title:'單位', fid:'Unit' }, 
    ];

    let items:any[] = [];   //物品
    let inputs:any[] = [];  //入庫單號

    onMount(async()=> { 
        row = await _Ajax.getJsonA('/Donate/Detail', false, {id:params.id}) || {};
        items = _Json.getChildRows(row, 0) || [];
        inputs = _Json.getChildRows(row, 1) || [];
    });

</script>