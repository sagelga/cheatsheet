import{_ as e,o as n,c as s,e as a}from"../app.b199fa92.mjs";const i={},t=a(`<h1 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally</h1><p>finally is used with try\u2026except block to close up resources or file streams.</p><p>Using finally ensures that the block of code inside it gets executed even if there is an unhandled exception. For example:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    Try<span class="token operator">-</span>block
<span class="token keyword">except</span> exception1<span class="token punctuation">:</span>
    Exception1<span class="token operator">-</span>block
<span class="token keyword">except</span> exception2<span class="token punctuation">:</span>
    Exception2<span class="token operator">-</span>block
<span class="token keyword">else</span><span class="token punctuation">:</span>
    Else<span class="token operator">-</span>block
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    Finally<span class="token operator">-</span>block
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here if there is an exception in the Try-block, it is handled in the except or else block. But no matter in what order the execution flows, we can rest assured that the Finally-block is executed even if there is an error. This is useful in cleaning up the resources.</p>`,5),l=[t];function o(c,r){return n(),s("div",null,l)}const d=e(i,[["render",o],["__file","index.html.vue"]]);export{d as default};
