SELECT ...
FROM [table_name_A]
LEFT OUTER JOIN [table_name_B]
USING ([primary_key])

UNION

SELECT ...
FROM [table_name_A]
RIGHT OUTER JOIN [table_name_B]
USING ([primary_key])
