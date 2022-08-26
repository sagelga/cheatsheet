import{_ as n,o as s,c as a,e}from"../app.b199fa92.mjs";const t={},o=e(`<h1 id="yield" tabindex="-1"><a class="header-anchor" href="#yield" aria-hidden="true">#</a> yield</h1><p>yield is used inside a function like a return statement. But yield returns a generator.</p><p>Generator is an iterator that generates one item at a time. A large list of value will take up a lot of memory. Generators are useful in this situation as it generates only one value at a time instead of storing all the values in memory. For example,</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>will create a generator g which generates powers of 2 up to the number two raised to the power 99. We can generate the numbers using the next() function as shown below.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">2</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">8</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And so on\u2026 This type of generator is returned by the yield statement from a function. Here is an example.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> i<span class="token operator">*</span>i

g <span class="token operator">=</span> generator<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> g<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

0
1
4
9
16
25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the function generator() returns a generator that generates square of numbers from 0 to 5. This is printed in the for loop.</p>`,10),p=[o];function i(l,r){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","index.html.vue"]]);export{u as default};
