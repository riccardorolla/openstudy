if "%1"=="" goto :help
if "%2"=="" goto :help
cscript %~dp0\openStudy.js %1 %2
goto end
:help
echo openstudy.cmd [accession Number] [datasource]
goto end

:end