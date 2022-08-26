import{_ as n,o as s,c as a,e}from"../app.b199fa92.mjs";const t={},i=e(`<h1 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h1><p>return statement is used inside a function to exit it and return a value.</p><p>If we do not return a value explicitly, None is returned automatically. This is verified with the following example.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func_return</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">return</span> a

<span class="token keyword">def</span> <span class="token function">no_return</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>func_return<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>no_return<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

10
None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[i];function o(p,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","index.html.vue"]]);export{r as default};
