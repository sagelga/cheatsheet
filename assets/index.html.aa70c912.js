import{_ as n,o as a,c as s,e}from"../app.b199fa92.mjs";const t={},i=e(`<h1 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda" aria-hidden="true">#</a> lambda</h1><p>lambda is used to create an anonymous function (function with no name). It is an inline function that does not contain a return statement. It consists of an expression that is evaluated and returned. For example:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token operator">*</span><span class="token number">2</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

2
4
6
8
10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, we have created an inline function that doubles the value, using the lambda statement. We used this to double the values in a list containing 1 to 5.</p>`,5),o=[i];function l(c,d){return a(),s("div",null,o)}const u=n(t,[["render",l],["__file","index.html.vue"]]);export{u as default};
