<XpProgTitle title='活動查詢'/>
<XiCheck {vm} fid='FilterDate' label="只查詢有效的活動資料" fnOnChange={onFilterA} />

<div class='row'>
    {#each rows || [] as row}
        {@const actUrl = `/Act/Detail/${row.Id}`}
        {@const imageUrl = _Str.isEmpty(row.ImageFile) ? '' : `${_AjaxBase.apiUrl}/Act/Image?key=${row.Id}&ext=${_File.getFileExt(row.ImageFile)}`}
        {@const startEnd = _Date.dsToUi(row.StartDate) + " ~ " + _Date.dsToUi(row.EndDate)}

        <div class="col-md-3">
            <div class="xu-card">
                <a href={actUrl}>
                    <div class="image" style="background:url({imageUrl}); background-size:cover; background-position:center;"></div>
                </a>
                <div class="body">
                    <a href={actUrl} style="text-decoration:none;">
                        <h3>{row.Name}</h3>
                    </a>
                    <!--
                    <p class="caption">{row.Caption}</p>
                    <p class="item">單位：@row.CreatorName</p>
                    -->
                    <p class="item">起迄日期：{startEnd}</p>
                </div>
            </div>
        </div>
    {/each}
</div>

<XgPager bind:this={pager} fnOnFetch={fetchPageA}/>

<script lang="ts">
	import { onMount } from "svelte";
    import XgPager from "@base/lib/XgPager.svelte";
    import XiCheck from "@base/lib/XiCheck.svelte";
    import XpProgTitle from "@/lib/XpProgTitle.svelte";
    import _Ajax from "@base/ts/_Ajax";
    import _Date from "@base/ts/_Date";
    import _File from "@base/ts/_File";
    import _Fun from "@base/ts/_Fun";
    import _Str from "@base/ts/_Str";
    import _VM from "@base/ts/_VM";
    import _Xp from "@/ts/_Xp";
    import _AjaxBase from "@base/ts/_AjaxBase";

    //3.query form view-model
    let vm = {
        FilterDate: 0
    };
    _VM.init(vm);

    let pager:XgPager;
    let rows:any[] = [];

    onMount(async()=> { 
        await fetchPageA(1, true, true);
    });
    
    async function onFilterA():Promise<void> {
        await fetchPageA(1, true, true);
    }

    //fetch page rows
    async function fetchPageA(page:number, reCount:boolean, setPage:boolean):Promise<void> {
        //欄位名稱加底線表示計算用途, 不會直接進SQL
        let findJson = { _filter: vm.FilterDate };
        rows = await pager.fetchPageA('Act', page, findJson, '', reCount, setPage);
    }
</script>

<style>
    .xu-card {
        display: block;
        padding: 0;
        margin-bottom: 20px;
        line-height: 1.42857143;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-transition: border .2s ease-in-out;
        -o-transition: border .2s ease-in-out;
        transition: border .2s ease-in-out;
    }
    .xu-card:hover {
        border: 1px solid #FF7962;
    }
    .xu-card .image {
        display: inline-block;
        line-height: 215px;
        text-align: center;
        width: 100%;
        padding-bottom: 64%;
        border-top-left-radius: 4px 4px;
        border-top-right-radius: 4px 4px;
    }
    .xu-card .body {
        padding: 9px;
        color: #333;
        font-size: 14px;
        padding: 10px;
        margin: 0;
        display: block;
    }
    .xu-card h3 {
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #ec7263;
        margin: 0 0 8px 0;
    }
    /*
    .xu-card .caption {
        height: 21px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 10px;
    }
    */
    .xu-card .item {
        height: 21px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 300;
        font-size: 90%;
        margin-bottom: 6px;
    }
</style>