$appmodule = Get-Content -path "trial.txt"
write-host $appmodule
$modules_str = Get-ChildItem -Path Env:\BUILD_MODULES
$modules_arr = $modules_str.Value.split(",")
$modules_arr