import{_ as n,o as s,c as a,e}from"../app.b199fa92.mjs";const t={},i=e(`<h1 id="nonlocal" tabindex="-1"><a class="header-anchor" href="#nonlocal" aria-hidden="true">#</a> nonlocal</h1><p>The use of nonlocal keyword is very much similar to the global keyword. nonlocal is used to declare that a variable inside a nested function (function inside a function) is not local to it, meaning it lies in the outer inclosing function. If we need to modify the value of a non-local variable inside a nested function, then we must declare it with nonlocal. Otherwise a local variable with that name is created inside the nested function. Following example will help us clarify this.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">outer_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token keyword">def</span> <span class="token function">inner_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> a
        a <span class="token operator">=</span> <span class="token number">10</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Inner function: &quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
    inner_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Outer function: &quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>

outer_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

Inner function:  10
Outer function:  10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the inner_function() is nested within the outer_function.</p><p>The variable a is in the outer_function(). So, if we want to modify it in the inner_function(), we must declare it as nonlocal. Notice that a is not a global variable.</p><p>Hence, we see from the output that the variable was successfully modified inside the nested inner_function(). The result of not using the nonlocal keyword is as follows:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">outer_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token keyword">def</span> <span class="token function">inner_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        a <span class="token operator">=</span> <span class="token number">10</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Inner function: &quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
    inner_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Outer function: &quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>

outer_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Output

Inner function:  10
Outer function:  5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, we do not declare that the variable a inside the nested function is nonlocal. Hence, a new local variable with the same name is created, but the non-local a is not modified as seen in our output.</p>`,10),o=[i];function c(l,u){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
