import{_ as n,o as e,c as s,e as a}from"../app.b199fa92.mjs";const i={},l=a('<h1 id="insert-into" tabindex="-1"><a class="header-anchor" href="#insert-into" aria-hidden="true">#</a> INSERT into</h1><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name <span class="token punctuation">(</span>column_name<span class="token punctuation">,</span> column_name<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>\n    <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\n## Example One\nCategory : `full insert`&lt;br&gt;\nInsert these following data to the `Employees` table.\n|`id`&lt;br&gt;(not `PK`)|`first_name`|`last_name`|`salary`|\n|-|-|-|-|\n|222|&#39;Sam&#39;|&#39;Smith&#39;|200|\n\nthis is how you write it into SQL format\n\n&lt;&lt;&lt; @/code/Insert/insert-example-one.sql\n\n### Example Two\nCategory : `selective insert`&lt;br&gt;\nInsert these following data to the `Employees` table.\n|`id`&lt;br&gt;(`PK`)|`first_name`|`last_name`|`salary`|\n|-|-|-|-|\n||&#39;Sam&#39;|&#39;Smith&#39;|200|\n\nIn this case, you will not insert `id` attribute by yourself. (because `AI` constraint) So we have to let that to be blank.\n\nNow, we have to specify a column to let data to be insert into.\n\n&lt;&lt;&lt; @/code/Insert/insert-example-two.sql\n\n### Example Three\nCategory : `explicit null` `selective insert`&lt;br&gt;\nInsert these following data to the `Employees` table.\n|`id`&lt;br&gt;(`PK`)|`first_name`|`last_name`|`salary`|\n|-|-|-|-|\n||&#39;Sam&#39;|&#39;Smith&#39;|200|\n||&#39;Jeff&#39;|&#39;Jeff&#39;||\n\nIn this case, some value is not being specified. We must include something to make the script run.\n\nWe can add `Null` to the value, as following\n\n&lt;&lt;&lt; @/code/Insert/insert-example-three.sql\n\n### Example Four\nCategory : `implicit null` `selective insert`&lt;br&gt;\nInsert these following data to the `Employees` table.\n|`id`&lt;br&gt;(`PK`)|`first_name`|`last_name`|`salary`|\n|-|-|-|-|\n||&#39;Sam&#39;|&#39;Smith&#39;||\n||&#39;Jeff&#39;|&#39;Jeff&#39;||\n\nIn this case, salary is not given but the table have the columns to keep it.\n\n&lt;&lt;&lt; @/code/Insert/insert-example-three.sql\n\n::: tip Note\nIf not given any value, SQL will set data value to default value. (Null is default of default value)&lt;br&gt;\nYou can set the default value when creating a new table or modifying a column settings.\n:::\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),t=[l];function d(c,u){return e(),s("div",null,t)}const r=n(i,[["render",d],["__file","index.html.vue"]]);export{r as default};
