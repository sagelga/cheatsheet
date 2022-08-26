import{_ as n,o as e,c as s,e as a}from"../app.b199fa92.mjs";const i={},t=a(`<h1 id="break-continue" tabindex="-1"><a class="header-anchor" href="#break-continue" aria-hidden="true">#</a> break, continue</h1><p>break and continue are used inside for and while loops to alter their normal behavior.</p><p>break will end the smallest loop it is in and control flows to the statement immediately below the loop. continue causes to end the current iteration of the loop, but not the whole loop.</p><p>This can be illustrated with the following two examples:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

1
2
3
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the for loop intends to print numbers from 1 to 10. But the if condition is met when i is equal to 5 and we break from the loop. Thus, only the range 1 to 4 is printed.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

1
2
3
4
6
7
8
9
10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here we use continue for the same program. So, when the condition is met, that iteration is skipped. But we do not exit the loop. Hence, all the values except 5 is printed out.</p>`,10),o=[t];function l(p,c){return e(),s("div",null,o)}const r=n(i,[["render",l],["__file","index.html.vue"]]);export{r as default};
