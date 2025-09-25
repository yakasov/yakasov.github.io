async function loadMdSrc() {
    const src_url = document.querySelector('#md-src').value;
    const md_src = await fetch(src_url, {method: 'GET', headers: {}})
        .then(res => res.text())
        .then(text => text.split('\n'))
    const html_md = convertToMarkdown(md_src);
    loadHtml(html_md)
}


function convertToMarkdown(src) {
    var html = "";
    src.forEach((line) => {
        ls = line.split('')[0] || "";

        if (line.includes('**')) {
            line = convertTags(line.split('**'), 'strong')
        }
        if (line.includes('*')) {
            line = convertTags(line.split('*'), 'em')
        }

        switch(ls) {
            case "#":
                const h_tag = line.split('#').length - 1
                line = line.replace('#'.repeat(h_tag), "")
                html = html + `<h${h_tag}> ${line} </h${h_tag}>`
                break;
            case "":
                html  = html + `<br>`
                break;
            default:
                html = html + `<p> ${line} </p>`
                break;
    }});
    return html;
}


function convertTags(line, tag) {
    return line.reduce( (a, b, i) => {
        return i % 2 == 0 ? a + `</${tag}>` + b : a + `<${tag}>` + b
    });
}


function loadHtml(html_md) {
    document.querySelector('#md').innerHTML = html_md;
}