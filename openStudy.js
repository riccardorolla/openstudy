var accnum = WScript.arguments(1)
var datasource = WScript.arguments(0)
var oSynapseAPI = new ActiveXObject("Synapse.SynapseAPI");
var sStudyPath = oSynapseAPI.MakePath(1, accnum);
oSynapseAPI.CloseSynapseExplorer("Synapse");
oSynapseAPI.OpenSynapseExplorer("Synapse", datasource, sStudyPath);
