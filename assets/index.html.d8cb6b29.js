import{_ as n,o as s,c as a,e}from"../app.b199fa92.mjs";const t={},o=e(`<h1 id="outer-full-outer-join" tabindex="-1"><a class="header-anchor" href="#outer-full-outer-join" aria-hidden="true">#</a> Outer - Full Outer Join</h1><p>Full Outer Join allows data that is matched from table_a and table_b, but also shows the data that table_a have and b does not have and table_b value that a does not have.</p><p><img src="https://static1.squarespace.com/static/5732253c8a65e244fd589e4c/t/5744be65c6fc08b3af1b0fbd/1464122985024/?format=300w" alt="Select all from Table A and B"></p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>In the MySQL, there is no full outer join. To do the full outer join, left join and right join is needed and later <strong>union</strong> with each other to get the same result as full outer join.</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> <span class="token punctuation">[</span>table_name_A<span class="token punctuation">]</span>
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> <span class="token punctuation">[</span>table_name_B<span class="token punctuation">]</span>
<span class="token keyword">USING</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>primary_key<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">UNION</span>

<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> <span class="token punctuation">[</span>table_name_A<span class="token punctuation">]</span>
<span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> <span class="token punctuation">[</span>table_name_B<span class="token punctuation">]</span>
<span class="token keyword">USING</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>primary_key<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> <span class="token keyword">Order</span>
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> Employees
<span class="token keyword">USING</span> <span class="token punctuation">(</span>P_Code<span class="token punctuation">)</span>

<span class="token keyword">UNION</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> <span class="token keyword">Order</span>
<span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> Employees
<span class="token keyword">USING</span> <span class="token punctuation">(</span>P_Code<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[o];function p(i,c){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","index.html.vue"]]);export{r as default};
