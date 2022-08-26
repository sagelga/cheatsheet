import{_ as n,o as s,c as e,e as a}from"../app.b199fa92.mjs";const i={},t=a(`<h1 id="if-else-elif" tabindex="-1"><a class="header-anchor" href="#if-else-elif" aria-hidden="true">#</a> if, else, elif</h1><p>if, else, elif are used for conditional branching or decision making.</p><p>When we want to test some condition and execute a block only if the condition is true, then we use if and elif. elif is short for else if. else is the block which is executed if the condition is false. This will be clear with the following example:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">if_example</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;One&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> a <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Two&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Something else&#39;</span><span class="token punctuation">)</span>

if_example<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
if_example<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
if_example<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

Two
Something else
One
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the function checks the input number and prints the result if it is 1 or 2. Any input other than this will cause the else part of the code to execute.</p>`,6),l=[t];function p(o,c){return s(),e("div",null,l)}const d=n(i,[["render",p],["__file","index.html.vue"]]);export{d as default};
