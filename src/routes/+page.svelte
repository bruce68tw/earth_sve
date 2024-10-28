<div class='row'>
    <div class='col-md-6'>
        <h1>物品大類募集與使用情形</h1>
        <XcStackBar legends={['目前庫存','已出貨','募集中']} trans={[0.9, 0.6, 0.3]} 
            labels={data.typeUse.labels} values={data.typeUse.values} {colorSet}/>
    </div>
    <div class='col-md-6'>
        <h1>物品短缺前10項統計</h1>
        <XcBar labels={data.short10.labels} values={data.short10.values} {colorSet}/>
    </div>
    <!-- 使用flex水平置中, w-100和margin設定pie大小 -->
    <div class='col-md-6 d-flex justify-content-center'>
        <div class='w-100 mt-3 xu-pie' style='margin:0 25%;'>
            <h1>物品大類募集比例</h1>
            <XcPie legends={data.donatePct.labels} values={data.donatePct.values} {colorSet} />
        </div>
    </div>
    <div class='col-md-6'>
        <h1 class='mt-3'>物品過去7天使用量前5項</h1>
        <XcLine legends={data.top5Item.titles} labels={data.top5Item.labels} values={data.top5Item.values} {colorSet}/>
    </div>
</div>

<script lang='ts'>
    import { ColorSetEnum } from '@base/enum/ColorSetEnum';
    import XcStackBar from "@base/lib/XcStackBar.svelte";
    import XcBar from "@base/lib/XcBar.svelte";
    import XcPie from "@base/lib/XcPie.svelte";
    import XcLine from "@base/lib/XcLine.svelte";

    //屬性名稱必須為data !!
    export let data;

    let colorSet = ColorSetEnum.energetic;
</script>

<style>
    h1{
        font-size: 20px;
        display:flex;
        justify-content: center;
    }

    @media (max-width:768px) {
        .xu-pie {
            margin:0;
        }
    }    
</style>