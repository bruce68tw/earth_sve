/* eslint-disable @typescript-eslint/no-explicit-any */
import _Ajax from "@base/ts/_Ajax";
import _AjaxBase from "@base/ts/_AjaxBase";
import _Json from "@base/ts/_Json";

export const ssr = true;

export async function load() {
    console.log('ssr load');
    _AjaxBase.init('http://localhost:7138'); //important !!
    const row = await _Ajax.getJsonA('/Act/Detail', false, {id:'2023080001'}) || {};

    return {
        row: row,
        items: _Json.getChildRows(row, 0) || [],
        outputs: _Json.getChildRows(row, 1) || [],
    };
}
