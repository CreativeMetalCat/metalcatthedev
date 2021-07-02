function OnLinkHoveredOver(infoBLockName)
{
    document.getElementById(infoBLockName).style.display = "block"
}
function OnLinkUnHovered(infoBLockName)
{
    document.getElementById(infoBLockName).style.display = "none"
}

function OnFooterHover()
{
    document.getElementById("links").style.display="block"
}

function OnFooterUnHover()
{
    document.getElementById("links").style.display="None"
}