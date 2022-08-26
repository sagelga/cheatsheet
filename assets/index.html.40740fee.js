import{_ as n,o as s,c as e,e as a}from"../app.b199fa92.mjs";const t={},i=a(`<h1 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h1><p>in is used to test if a sequence (list, tuple, string etc.) contains a value. It returns True if the value is present, else it returns False. For example:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token keyword">in</span> a
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token keyword">in</span> a
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The secondary use of in is to traverse through a sequence in a for loop.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

h
e
l
l
o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[i];function l(p,c){return s(),e("div",null,o)}const d=n(t,[["render",l],["__file","index.html.vue"]]);export{d as default};
