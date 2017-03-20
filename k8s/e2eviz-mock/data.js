const TESTS = [
   {
      "test_name" : "Start kubemark"
   },
   {
      "test_name" : "Stop kubemark"
   },
   {
      "test_name" : "[k8s.io] Reboot [Disruptive] [Feature:Reboot] each node by dropping all inbound packets for a while and ensure they function afterwards"
   },
   {
      "test_name" : "[k8s.io] PetSet [Slow] [Feature:PetSet] [k8s.io] Deploy clustered applications [Slow] [Feature:PetSet] should creating a working mysql cluster [Feature:PetSet]"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner should create and delete persistent volumes [Slow]"
   },
   {
      "test_name" : "[k8s.io] Pods should cap back-off at MaxContainerBackOff [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl create quota should create a quota without scopes"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl label should update the label on a resource [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/ a readonly PD on two hosts, then remove both ungracefully. [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Beta should not provision a volume in an unmanaged GCE zone. [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner External should let an external dynamic provisioner create and delete persistent volumes [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that embedding the JSON NodeAffinity setting as a string in the annotation value work"
   },
   {
      "test_name" : "[k8s.io] Rescheduler [Serial] should ensure that critical pod is scheduled in case there is no resources available"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates MaxPods limit number of pods that are allowed to run [Slow]"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] should run and stop complex daemon"
   },
   {
      "test_name" : "[k8s.io] HostPath should give a volume the correct mode [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable in multiple volumes in a pod [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide node allocatable (memory) as default memory limit if the limit is not set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0644,default) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Docker Containers should be able to override the image's default arguments (docker cmd) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Events should be sent by kubelets and the scheduler about pods scheduling and running [Conformance]"
   },
   {
      "test_name" : "[k8s.io] DNS should provide DNS for services [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable in multiple volumes in the same pod [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pods should get a host IP [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Deployment RollingUpdateDeployment should scale up and down in the right order"
   },
   {
      "test_name" : "[k8s.io] Job should delete a job"
   },
   {
      "test_name" : "[k8s.io] Job should scale a job down"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's cpu limit"
   },
   {
      "test_name" : "[k8s.io] Generated release_1_2 clientset should create pods, delete pods, watch pods"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner should create and delete persistent volumes"
   },
   {
      "test_name" : "[k8s.io] Cadvisor should be healthy on every node."
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's memory request"
   },
   {
      "test_name" : "[k8s.io] Deployment RecreateDeployment should delete old pods and create new ones"
   },
   {
      "test_name" : "[k8s.io] Services should be able to up and down services"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should verify ResourceQuota with terminating scopes."
   },
   {
      "test_name" : "[k8s.io] Deployment scaled rollout deployment should not block on annotation check"
   },
   {
      "test_name" : "[k8s.io] Staging client repo client should create pods, delete pods, watch pods"
   },
   {
      "test_name" : "[k8s.io] EmptyDir wrapper volumes should not conflict"
   },
   {
      "test_name" : "[k8s.io] DisruptionController evictions: too few pods, replicaSet, percentage => should not allow an eviction"
   },
   {
      "test_name" : "[k8s.io] DNS horizontal autoscaling kube-dns-autoscaler should scale kube-dns pods in both nonfaulty and faulty scenarios"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0777,tmpfs) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected optional updates should be reflected in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume with mappings as non-root [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should provide podname only [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0644,default) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] HostPath should support subPath [Volume]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable via the environment [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes volume on tmpfs should have the correct mode [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings and Item mode set[Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's cpu limit [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] CronJob should delete successful finished jobs with limit of one successful job"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Default should be disabled by changing the default annotation[Slow] [Serial] [Disruptive] [Volume]"
   },
   {
      "test_name" : "[k8s.io] NoExecuteTaintManager [Serial] doesn't evict pod with tolerations from tainted nodes"
   },
   {
      "test_name" : "[k8s.io] Upgrade [Feature:Upgrade] [k8s.io] master upgrade should maintain responsive services [Feature:MasterUpgrade]"
   },
   {
      "test_name" : "[k8s.io] V1Job should fail a job [Slow]"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] with Single PV - PVC pairs create a PV and a pre-bound PVC: test write access"
   },
   {
      "test_name" : "[k8s.io] Cluster level logging using GCL [Slow] [Flaky] should create a constant load with long-living pods and ensure logs delivery"
   },
   {
      "test_name" : "[k8s.io] kubelet [k8s.io] host cleanup with volume mounts [HostCleanup][Flaky] Host cleanup after pod using NFS mount is deleted [Volume][NFS] after deleting the nfs-server, the host should be cleaned-up when deleting sleeping pod which mounts an NFS vol [Serial]"
   },
   {
      "test_name" : "[k8s.io] Federation namespace [Feature:Federation] Namespace objects should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Federation deployments [Feature:Federation] Federated Deployment should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] with clusters Federated Service should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Resource-usage [Serial] [Slow] regular resource usage tracking resource tracking for 105 pods per node [Benchmark]"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/apiserver Test202StatusCode"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationAPI/apiResourceList"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/garbagecollector TestSolidOwnerDoesNotBlockWaitingOwner"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestEmptyList"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/serviceaccount TestServiceAccountTokenAutoCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/ttlcontroller TestTTLAnnotations"
   },
   {
      "test_name" : "//cmd/kubeadm/app/util/kubeconfig:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/cluster:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/configmap:go_default_test"
   },
   {
      "test_name" : "//pkg/api/v1/endpoints:go_default_test"
   },
   {
      "test_name" : "//pkg/apimachinery/tests:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/abac/v1beta1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/apis/authorization/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/settings/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/client/unversioned:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/openstack:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/rackspace:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/bootstrap:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/replicaset:go_default_test"
   },
   {
      "test_name" : "//pkg/credentialprovider/azure:go_default_test"
   },
   {
      "test_name" : "//pkg/kubeapiserver/authorizer:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl/cmd:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/client:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/dockertools:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/prober:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/rkt:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/server/portforward:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/util/csr:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/endpoint/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/persistentvolumeclaim/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/rbac/reconciliation:go_default_test"
   },
   {
      "test_name" : "//pkg/serviceaccount:go_default_xtest"
   },
   {
      "test_name" : "//pkg/util/system:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/photon_pd:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/defaulttolerationseconds:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/serviceaccount:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/auth/authorizer/rbac/bootstrappolicy:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Container Lifecycle Hook when create a pod with lifecycle hook when it is http hook should execute prestop http hook properly [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should be able to pull image from gcr.io [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should not be able to pull image from invalid registry [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubelet when scheduling a busybox command that always fails in a pod should have an error terminated reason"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide podname as non-root with fsgroup and defaultMode [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/genutils TestInvalidDir"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/preflight TestPollCheckServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateNodeConfiguration"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestComponentPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestGetSchedulerCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/addons TestGetClusterCIDR"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestWritePublicKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestValidVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestInvalidVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestHasMacroBlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider TestEquivalent"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsList"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsRemove"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/ingress TestIngressController"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster TestClusterStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/hack/cmd/teststale TestIsTestStale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestNodeSelectorRequirementsAsSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestResourceHelpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/testapi TestExperimentalEncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/util TestGetGroup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestGetAvoidPodsFromNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultReplicationControllerReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultProjectedVolumeSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultPodSpecHostNetwork"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/pod TestPodSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestConjunctiveSchema"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateVolumeMounts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/policy/validation TestValidatePodDisruptionBudgetStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleNoAPIGroup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/chaosclient TestChaos"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/retry TestRetryOnConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestFindInstancesByNodeNameCached"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestDescribeLoadBalancerOnEnsure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileLoadBalancerRemoveAllPortsRemovesFrontendConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_newMesosCloud_NoConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_newMesosCloud_WithConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/photon TestReadConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestRemoveSignature"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestGroupJobsByParent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNotReadNodeDaemonDoesNotLaunchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestPortConflictNodeDaemonDoesNotLaunchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestPortConflictWithSameDaemonPodDoesNotDeletePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestInsufficientCapacityNodeDaemonLaunchesCriticalPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeploymentController_reconcileNewReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestFindNewReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestResolveFenceposts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestDeploymentProgressing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestUnavailable"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestReplicationController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestDelNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpCM"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpCMUnreadyNoScaleWouldScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleUpUnreadyNoScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleUpCM"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUMoreMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestQpsSuperfluousMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestQpsEmptyEntries"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestRESTClientQPS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podgc TestGCTerminated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestDeleteFinalStateUnknown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestPodControllerLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestControllerUpdateStatusWithFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestWatchPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestReadyReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestSyncResourceQuotaSpecHardChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlCreatePodPvcCreateFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdatesIdentity"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControlScaleUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestDefaultStatefulSetControlCreatePodFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerAddPodOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerUpdatePodOrphanWithNewLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestOverlappingStatefulSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/ttl TestPatchNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_SetVolumeMountedByNode_Positive_UnsetWithInitialSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddPod_Positive_PodExistsNodeExistsVolumeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeleteNode_Positive_NodeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestKeyringMiss"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestIsDefaultRegistryMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestLazyKeyring"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestCachingProvider"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubeapiserver TestParseRuntimeConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestValidateParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGeneratePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestReplicationControllerScaleRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentScaleFailsPreconditions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestServiceBasicGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestServiceAccountGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestReplicaSetStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestValidateAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAnnotateErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestUnstructuredIdempotentApply"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestSetupOutputWriterNoOp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteObjectByTuple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCordon"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetSortedObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetMultipleTypeObjectsAsList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGenerateService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printMultiContainersReplicationControllerWithWide"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetWithPathPrefixIntoExistingStruct"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetBoolean"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestEmptyTokenAndCertAllowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestBasicClearsToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCAClearsCAData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCADataClearsCA"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestToBool"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetClustersEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestPortsForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util/editor TestArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestContinueOnErrorVisitor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestIsRootDiskSpaceAvailableWithoutSpace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet Test_getFsInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetRawContainerInfoRoot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestKubeletDirs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdateNodeStatusWithRuntimeStateError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestRunInContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHasHostVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHandlePortConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDeleteOutdatedMirrorPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGenerateAPIPodStatusWithDifferentRestartPolicies"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestListVolumesForPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestVolumeUnmountAndDetachControllerDisabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestUpdateSymlinkNewFileNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestLoadCertKeyBlocksNoFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestUpdateRotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestCurrentCertKeyFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAdded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedDifferentNamespaces"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestInvalidPodFiltered"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedUpdatedSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestUpdateOnNonExistentFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestSandboxNameRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestParseRandomizedNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifyContainerConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestCreateAppArmorContanier"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodsDoesNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodWithRestartPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodEventHandlerFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDockerVersionComparison"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodGetsPodIPFromNetworkPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools/securitycontext TestModifyHostConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/envvars TestFromServices"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestMemoryPressure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestPercentageThresholdsMet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/gpu/nvidia TestMultiContainerPodGPUAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestGarbageCollectBelowLowThreshold"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestListImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/cni TestCNIPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hairpin TestSetUpInterfaceNonExistent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hostport TestOpenPodHostports"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pleg TestRelisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pleg TestHealthy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestOnHoldOnLivenessCheckFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestSetApp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestMachineInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestInsert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestNewStatusPreservesPodStartTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_AddPodToVolume_Positive_ExistingVolumeExistingNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_AddPodToVolume_Positive_ExistingPodExistingVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestYAMLPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrinters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintNodeKernelVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestOnlyLocalNodePortsNoClusterCIDR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestBuildServiceMapServiceHeadless"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestMultiPortOnServiceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestTCPProxyStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestUDPProxyStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestTCPProxyUpdateDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestLoadBalanceWorksWithMultipleEndpointsMultiplePorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob TestCronJobStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod TestMatchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller TestValidateUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret TestExportSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceStorageValidatesUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryDeleteExternal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestCheckGeneratedNameError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestSnapshotAndRestore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator TestForEach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator TestNewFromSnapshot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/controller TestRepairLeak"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset TestReplicaSetStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata TestCreater"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata TestThirdPartyResourceDataListEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/reconciliation TestComputeReconciledRole"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversMultipleAPIGroupsCoveringSingleRule"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversResourceStarCoveringStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/seccomp TestValidatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/selinux TestMustRunAsValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/selinux TestRunAsAnyGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestNewMustRunAs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestParseSELinuxOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestHasRootRunAsUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/ssh TestSSHUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestHexCIDR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestReconcileInterfaceDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/exec TestExecutorWithArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestEnsureRuleNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestDeleteRuleErrorChecking"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestWaitFlagUnavailable"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/oom TestOOMScoreAdjContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/term TestMaxWidthWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestSpecSourceConverters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestGenerateVolumeName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_file TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cinder TestGetDeviceName_Volume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cinder TestAttachDetach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/configmap TestPluginReboot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/configmap TestPluginKeysOptional"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestGetFlockerVolumeSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestNewMounterDatasetUUID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/git_repo TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestProvisioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestWaitForPathToExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/nfs TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/photon_pd TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/portworx TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/portworx TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/rbd TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrCreateVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrAttachVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrDetachVolume_VolumeNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrDetachVolume_WaitForDetachError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/secret TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_SingleOp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_TwoOps"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_UnmountVolume_ConcurrentUnmountForAllPlugins"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/defaulttolerationseconds TestForgivenessAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/imagepolicy TestWebhookCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestGetUsagePercentile"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestAdmitConflictWithNonMatchingLabelsShouldNotError"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmissionIgnoresSubresources"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitBelowQuotaLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitHandlesOldObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitLimitedResourceNoQuotaIgnoresNonMatchingResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitLimitedResourceWithQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitFSGroup"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/securitycontext/scdeny TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestIgnoresNonCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac TestRuleMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestBootstrapControllerRoles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestRBDDiskConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestISCSIDiskConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodFitsSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestVolumeZonePredicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestInterPodAffinityAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestZoneSpreadPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithmprovider/defaults TestGetMaxVols"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestInvalidHardPodAffinitySymmetricWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestRemovePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestReconcileAffinity"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestBadRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestOrdersNamespaceInPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestVersionedParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestNewWayReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestHammerController"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_DeleteExistingNonPropagated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_addIfNotPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFO_addUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFO_detectLineJumpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFO_HasSynced"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache/testing TestRCNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestCreateMissingContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestMigratingFileSourceMissingSkip"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestConfirmUsableBadInfoButOkConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api TestMinifySuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api Example_ofOptionsConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestEventfNoNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestEventAggregatorByReasonMessageFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/clock TestFakeClockSleep"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestSlowBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/testing TestFakeHandlerNilBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestMaxOfRateLimiter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/token/tokenfile TestInsufficientColumnsTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetNamespaceSelfLink"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestConnect"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestConnectWithOptionsAndPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestDeleteWithOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateInvokesAdmissionControl"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateChecksAPIVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestProxyUpgrade"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestAuthenticateRequestError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/request TestGetNonAPIRequestInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/request TestUserAgentContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestDecoratedWatcherError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestNoOpUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreDeleteCollection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestInputStreamNullLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestInputStreamContentType"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/httplog TestStatusIsNot"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/storage TestUpdateEtcdOverrides"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestTransformationFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestListFiltered"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStreamPing"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook TestWebhookCacheAndRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authorizer/webhook TestTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestMultiRESTMapperKindsFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestPriorityRESTMapperRESTMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperVersionAndKindForResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperReportsErrorOnBadVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestDetectOverflowMultiply"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantitySubZeroPreservesSuffix"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestObjectMetaGenerationUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apimachinery/registered TestAddThirdPartyVersionsMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestCloneSelectorAndAddLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_byteSlice"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_IgnoredConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion/unstructured TestUnrecognized"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestSelectorMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestSetIsEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestEverything"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestToString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestArrayOfRuntimeObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer TestMultipleNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer TestEncode_Ptr"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/errors TestAggregateWithNil"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/intstr TestGetValueFromIntOrPercent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestPortRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/rand TestPerm"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/runtime TestCustomHandleError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringSetList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringUnion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestJitterUntilReturnsImmediately"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestTypedJSONOrYamlErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestBroadcaster"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestStreamWatcher"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/kube-aggregator/pkg/apiserver TestAPIGroupMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdTokenGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdTokenGenerateTypoError"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should be able to pull from private registry with secret"
   },
   {
      "test_name" : "Federation TearDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestOrphaning"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestMasterProcessMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeDeleter"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestServiceAccountTokenAuthentication"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestListEmptyTestTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestListTestTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/namer TestPluralNamer"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/parser TestStructParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestLinkRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestTopNoArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestTopFlagsBad"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestSuicide_WithTasks"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_doWith"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/constraint TestDeserialize"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestInMemoryRegistry_RegisterGetUnregister"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestInMemoryRegistry_TaskLifeCycle"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/service Test_awaitFailoverDone"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestGenerateName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestSimpleNameGenerator"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperVersionAndKindForResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestExtractList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestExtractListOfValuePtrs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQFlagIsPFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource ExampleFormat"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestTimeMarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateObjectMetaCustomName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateObjectMetaOwnerReferences"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversEnumerationNotCoveringVerbStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUnimplementedRESTStorage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetBinary"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateAllowsMissingNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWatchWebsocket"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/union TestAuthorizationSecondPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_HasSynced"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToReplicationControllerLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToPodLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestIsConfigTransportTLS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestAbsPathPreservesTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestSetsNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestNewWayReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestEventCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetIngress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateJobStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeletePetSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodGetLogs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestResourceQuotaGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestResourceQuotaStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListServicesLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestErrorReadingNonFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestMigratingFileLeaveExistingFileAlone"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/framework TestPopReleaseLock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/framework ExampleInformer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetIDCrossAssignment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestFederationQueryWithCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestSelectorParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestSelectorMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/httplog TestLoggedStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPodDescribeResultsSorted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintHumanReadableService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintNonTerminatedPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSingularObjectNoExtension"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainerInfoWhenContainerRuntimeFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestIsPodPastActiveDeadline"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/client TestHTTPKubeletClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestApplyDefaultImageTag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestGetRemovedEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/daemonset/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/endpoint TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/endpoint/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/event/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestInputStreamContentType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/horizontalpodautoscaler/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestDeleteNamespaceWithCompleteFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/networkpolicy/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/networkpolicy/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset TestPetSetStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podtemplate/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestUpdateServiceWithConflictingNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestBitCount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator/controller TestRepairEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator/etcd TestStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer TestMultipleNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/serviceaccount TestMakeUsername"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestObjectVersioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestListFiltered"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestDeleteUIDMismatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchEtcdState"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchListIgnoresRootKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestHighWaterMark"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestCreateWithKeyExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cache TestLRUOverflow"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/deployment TestGetNewRC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/errors TestFlatten"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestBackoffReset"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestRateLimiterSaturation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/intstr TestIntOrStringMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestParseIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestSplitSchemeNamePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringIntersection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strategicpatch TestNumberConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/testing TestFakeHandlerWrongBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/testing TestFakeHandlerNilBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsDNS1123Label"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestUntilReturnsImmediately"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestJitterUntilReturnsImmediately"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestPollImmediateError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestBase64Conn"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestWriteWithUnixPathBadPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestBroadcasterWatcherStopDeadlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestBroadcasterDropIfChannelFull"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch/versioned TestDecoder_SourceClose"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestLimitRangerCacheAndLRUExpiredMisses"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/password/passwordfile TestPasswordFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeClaimLabelSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestCreateBasicClientConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateFinalizersUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/batch/v2alpha1 TestSetDefaultJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWatchWebsocketClientClose"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/request TestGetNonAPIRequestInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestSerializer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestServerPreferredResourcesRetries"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestPrecedenceTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestServerRunWithSNI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribePodTolerations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopPodAllInNamespaceMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopPodWithNameMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHasPrivilegedContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifyHostConfigWithSandboxID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestResourceLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/etcd TestErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreListResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestGracefulStoreCanDeleteIfExistingGracePeriodZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestGracefulStoreHandleFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/versioning TestNestedDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/clock TestFakeClock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings TestGetArticleForNoun"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsWildcardDNS1123Subdomain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestReadSingleLongLine"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset/planner TestWithExistingAndCapacity"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetScheduledJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateScheduledJobStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/scheduledjob TestGetJobFromTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryExternalTrafficAnnotationGlobal"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetServerResourcesWithV1Server"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestAbsPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestURLBackoffFunctionalityCollisions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/auth TestLoadFromFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_addUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_KeyOf"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestTTLList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestCloseWatchChannelOnError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReflectorWatchHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestNonExistentCommandLineFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestErrorReadingFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateMissingCurrentContextConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestIsContextNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateEmptyAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateCleanCertFilesAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd Example_noMergingOnExplicitPaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api Example_emptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestMultiSinkCache"
   },
   {
      "test_name" : "//cmd/kube-apiserver/app/preflight:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl/cmd/util/editor:go_default_test"
   },
   {
      "test_name" : "//pkg/probe/tcp:go_default_test"
   },
   {
      "test_name" : "//pkg/util/ebtables:go_default_test"
   },
   {
      "test_name" : "//pkg/util/hash:go_default_test"
   },
   {
      "test_name" : "//pkg/util/ipconfig:go_default_test"
   },
   {
      "test_name" : "//pkg/util/oom:go_default_test"
   },
   {
      "test_name" : "//pkg/util/threading:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Volume Disk Format [Volumes] verify disk format type - eagerzeroedthick is honored for dynamically provisioned pv using storageclass"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes:vsphere should test that deleting the PV before the pod does not cause pod deletion to fail on PD detach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/sliceutils TestByImageSizeLess"
   },
   {
      "test_name" : "[k8s.io] Volume Disk Format [Volumes] verify disk format type - zeroedthick is honored for dynamically provisioned pv using storageclass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestSyncDeploymentDeletionRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestSendToCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestServiceAccountIsMutuallyExclusiveWithAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityProtoMarshal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestVolumeZoneConf"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] pinky Federated Ingresses should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifyContainerNamespacePIDOverride"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/admit TestAdmissionNonNilAttribute"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/admit TestAdmissionNilAttribute"
   },
   {
      "test_name" : "//hack/verify-flags:verify-uniq"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestRotateCertCreateCSRError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestUpdateRotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestUpdateRuleOptionsWithNonResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestAddPodOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestUpdatePodOrphanWithNewLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestUpdatePodRelease"
   },
   {
      "test_name" : "[k8s.io] Opaque resources should schedule pods that initially do not fit after enough opaque integer resources are freed."
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerUpdatePodWithNewLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerGetStatefulSetForPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerGetStatefulSetForPodOverlapping"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner should create and delete persistent volumes [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner should not provision a volume in an unmanaged GCE zone. [Slow]"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podtolerationrestriction TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateServiceSubnet"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/discovery TestParseURL"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestDefaultRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestCacheRefcounts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestGetReplicaSetsForDeploymentRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHostPIDAllowed"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow] should work from pods [Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] Kubectl alpha client [k8s.io] Kubectl run ScheduledJob should create a ScheduledJob"
   },
   {
      "test_name" : "Up"
   },
   {
      "test_name" : "DiffResources"
   },
   {
      "test_name" : "[k8s.io] Networking should provide Internet connection for containers [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Loadbalancing: L7 [Feature:Ingress] [k8s.io] GCE [Slow] [Feature: Ingress] shoud create ingress with given static-ip "
   },
   {
      "test_name" : "[k8s.io] Reboot [Disruptive] [Feature:Reboot] each node by ordering unclean reboot and ensure they function upon restart"
   },
   {
      "test_name" : "[k8s.io] Reboot [Disruptive] [Feature:Reboot] each node by switching off the network interface and ensure they function upon switch on"
   },
   {
      "test_name" : "[k8s.io] Reboot [Disruptive] [Feature:Reboot] each node by ordering clean reboot and ensure they function upon restart"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should disable node pool autoscaling [Feature:ClusterSizeAutoscalingScaleUp]"
   },
   {
      "test_name" : "[k8s.io] Services should be able to create services of type LoadBalancer and externalTraffic=localOnly [Slow][Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should function for pod-Service: udp"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Alpha should create and delete alpha persistent volumes [Slow]"
   },
   {
      "test_name" : "[k8s.io] CronJob should not schedule jobs when suspended [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Proxy server should support proxy with --port 0 [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Simple pod should support exec"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Update Demo should do a rolling update of a replication controller [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl rolling-update should support rolling-update to same image [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl patch should add annotations for pods in rc [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubelet [Serial] [Slow] [k8s.io] regular resource usage tracking resource tracking for 0 pods per node"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] should run and stop simple daemon"
   },
   {
      "test_name" : "[k8s.io] Etcd failure [Disruptive] should recover from SIGKILL"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] [Serial] [Slow] ReplicaSet Should scale from 5 pods to 3 pods and from 3 to 1"
   },
   {
      "test_name" : "[k8s.io] Kubelet [Serial] [Slow] [k8s.io] regular resource usage tracking resource tracking for 100 pods per node"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that NodeSelector is respected if not matching [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0777,default) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's memory request [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pods should contain environment variables for services [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0644,default) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Probing container should *not* be restarted with a /healthz http liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy through a service and a pod [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API should provide default limits.cpu/memory from node allocatable [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy logs on node using proxy subresource [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's cpu limit [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's cpu request"
   },
   {
      "test_name" : "[k8s.io] Services should be able to create a functioning NodePort service"
   },
   {
      "test_name" : "[k8s.io] Deployment deployment should delete old replica sets"
   },
   {
      "test_name" : "[k8s.io] Networking should function for intra-pod communication [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pods should not start app containers and fail the pod if init containers fail on a RestartNever pod"
   },
   {
      "test_name" : "[k8s.io] Pods should support remote command execution over websockets"
   },
   {
      "test_name" : "[k8s.io] SSH should SSH to all nodes and run commands"
   },
   {
      "test_name" : "[k8s.io] Services should use same NodePort with same port but different protocols"
   },
   {
      "test_name" : "[k8s.io] Monitoring should verify monitoring pods and all cluster nodes are available on influxdb using heapster."
   },
   {
      "test_name" : "[k8s.io] InitContainer should invoke init containers on a RestartAlways pod"
   },
   {
      "test_name" : "[k8s.io] Stateful Set recreate should recreate evicted statefulset"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's memory limit [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Generated release_1_5 clientset should create pods, set the deletionTimestamp and deletionGracePeriodSeconds of the pod"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0666,default) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir wrapper volumes should not conflict [Volume]"
   },
   {
      "test_name" : "[k8s.io] Garbage collector should orphan RS created by deployment when deleteOptions.OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Sysctls should support unsafe sysctls which are actually whitelisted"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on localhost [k8s.io] that expects no client request should support a client that connects, sends data, and disconnects [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0777,default) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Garbage collector should delete RS created by deployment when not orphaning"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0777,tmpfs) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume as non-root with defaultMode and fsGroup set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should project all components that make up the projection API [Conformance] [Volume] [Projection]"
   },
   {
      "test_name" : "[k8s.io] Firewall rule should have correct firewall rules for e2e cluster"
   },
   {
      "test_name" : "[k8s.io] Multi-AZ Clusters should spread the pods of a service across zones"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] [StatefulSet] should come back up if node goes down [Slow] [Disruptive]"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] [StatefulSet] should not reschedule pets if there is a network partition [Slow] [Disruptive]"
   },
   {
      "test_name" : "[k8s.io] NoExecuteTaintManager [Serial] removing taint cancels eviction"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Secret should create a pod that reads a secret"
   },
   {
      "test_name" : "[k8s.io] Federation namespace [Feature:Federation] Namespace objects deletes replicasets in the namespace when the namespace is deleted"
   },
   {
      "test_name" : "[k8s.io] Federation replicasets [Feature:Federation] Federated ReplicaSet should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "[k8s.io] Federation secrets [Feature:Federation] Secret objects should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Upgrade [Feature:Upgrade] [k8s.io] master upgrade should maintain a functioning cluster [Feature:MasterUpgrade]"
   },
   {
      "test_name" : "//mungegithub/mungers/flakesync:go_default_test"
   },
   {
      "test_name" : "//mungegithub/mungers/matchers/comment:go_default_test"
   },
   {
      "test_name" : "//prow/cmd/sinker:go_default_test"
   },
   {
      "test_name" : "//prow/line:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestAuthModeAlwaysDeny"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/examples TestAggregatedAPIServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestAutoscalingPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestWatchSucceedsWithoutArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/pods TestPodReadOnlyFilesystem"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicaset TestUpdateSelectorToAdopt"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicationcontroller TestUpdateLabelToRemoveControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeRecycler"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeBindRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeClaimLabelSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeClaimLabelSelectorMatchExpressions"
   },
   {
      "test_name" : "//cmd/kubeadm/app/util:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/service:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/util/podanalyzer:go_default_test"
   },
   {
      "test_name" : "//hack:verify-boilerplate"
   },
   {
      "test_name" : "//pkg/api:go_default_test"
   },
   {
      "test_name" : "//pkg/api/testapi:go_default_test"
   },
   {
      "test_name" : "//pkg/auth/authorizer/abac:go_default_test"
   },
   {
      "test_name" : "//pkg/client/retry:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/mesos:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/deployment:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/endpoint:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/namespace/deletion:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/podgc:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl/resource:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/certificate:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/dockershim:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/eviction:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/images:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/network/testing:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/prober/results:go_default_test"
   },
   {
      "test_name" : "//pkg/proxy/winuserspace:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/autoscaling/horizontalpodautoscaler/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/resourcequota:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/allocator/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/replicaset:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/thirdpartyresource:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/user:go_default_test"
   },
   {
      "test_name" : "//pkg/util/taints:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/gce_pd:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/rbd:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/auth/authorizer/rbac:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/algorithmprovider/defaults:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when starting a container that exits it should run with the expected status [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ImageID should be set to the manifest digest (from RepoDigests) when available"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume as non-root with FSGroup [Feature:FSGroup]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume as non-root with defaultMode and fsGroup set [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "[k8s.io] NodeProblemDetector [k8s.io] SystemLogMonitor should generate node condition and events for corresponding errors"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestTopNoArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestServerFlagsBad"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestCobraSubCommandDefaultMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestEtcdVolumeMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestCertsVolumeMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestK8sVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestComponentResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestNewCertAndKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/apis/federation/validation TestValidateClusterUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/cmd/federation-controller-manager/app TestControllerEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsReplaceAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/service TestGetClusterConditionPredicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestObjectMeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestIsStandardResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestRemoveDuplicateAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestSpecificKind"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestBadJSONRejection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestUnversionedTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateNamespaceFinalizeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateNamespaceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateDockerConfigSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateTLSSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateConfigMapUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestDecodeNumbers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/apps/validation TestValidateStatefulSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleNoResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/leaderelection TestTryAcquireOrRenew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/listers/extensions/v1beta1 TestDaemonSetLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/tests TestListWatchesCanList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestIpPermissionExistsHandlesMultipleGroupIdsWithUserIds"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestRecognizesNewRegion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestBackoffRecovers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestFindClusterID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller TestUIDExpectations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNetworkUnavailableNodeDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestInconsistentNameSelectorDaemonSetDoesNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestTaintedNodeDaemonDoesNotLaunchUntoleratePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestTaintedNodeDaemonLaunchesToleratePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDeletePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestPodDeletionDoesntEnqueueRecreateDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestAddReplicaSetOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeploymentController_cleanupUnhealthyReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestGetReplicaCountForReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestGetCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestPodTemplateSpecHash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestMultipleControllers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsProtocolTCP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsEmptySelectorSelectsAllMixed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestSyncPastDeadlineJobFinished"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestSyncJobDeleted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace/deletion TestSyncNamespaceThatIsTerminatingV1Beta1"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestPodStatusChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCheckPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpUnreadyLessScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpCMUnreadyLessScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestQPS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUMissingMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestRESTClientSingleObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestSyncReplicaSetDeletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestWatchControllers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestDeleteControllerAndExpectations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestOverlappingRCs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestPatchPodWithOtherOwnerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestGetCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/serviceaccount TestServiceAccountCreation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlDeleteFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdateReplicasConflictFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestDefaultStatefulSetControlCreatesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerBlocksScaling"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerUpdatePodWithSameVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStorageMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestUpdateStorage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeleteVolumeNode_Positive_VolumeExistsNodeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_SetVolumeMountedByNode_Positive_Set"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumesForNode_Positive_OneVolumeOneNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddPod_Positive_NewPodNodeExistsVolumeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeleteNode_Positive_NodeDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_VolumeExists_Positive_VolumeDoesntExistNodeDoesntExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestListByAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestAlphaProvisionSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestProvisionMultiSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestDockerConfigJsonJSONDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestDockerConfigJSONDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestDockerKeyringForGlob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestComputePlatformScopeSubstitutesStorageScope"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fieldpath TestExtractFieldPathAsString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubeapiserver/admission TestCloudConfigAdmissionPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubeapiserver/authorizer/modes TestIsValidAuthorizationMode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubeapiserver/options TestGenerateStorageVersionMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestQuotaGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestRollingUpdater_readyPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDaemonSetStatusViewerStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGenerateCronJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestReplicationControllerStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestJobStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAnnotateObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyNonExistObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyMultipleObjectsAsList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestRunApplySetLastApplied"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateServiceAccount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateMultipleObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateDirectory"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetMultipleTypeObjectsWithSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestLabelFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestLabelMultipleObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPatchObjectFromFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetRestartPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestRunArgsFollowDashRules"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestRunValidations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCAClearsInsecure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCAAndInsecureDisallowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestMergeExistingAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetContextsAllNone"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestLocalAndDryRunFlags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestNodeBuilder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestResourceByNameWithoutRequireObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSelectorRequiresKnownTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestListObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestHelperDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestHelperGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestValidPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestIsRuntimeDiskSpaceAvailableWithSpace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestKubeletDirsCompat"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestParseResolvConf"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestTryRegisterWithApiServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestRunInContainerNoSuchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHasNonNamespacedCapability"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdatePodDoesNotForgetSyncPodKill"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestMilliCPUToQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestNodeAllocatableForEnforcement"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestDecodePodList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestExtractInvalidPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestExtractPodsFromHTTP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestRegisterNotification"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestFileStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestConvertDockerStatusToRuntimeAPIState"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestAPIVersionWithCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestGetUserFromImageUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestContainerNameRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifyHostConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifySandboxNamespaceOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetPodStatusFromNetworkPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodDeletesWithNoPodInfraContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodWithPodInfraCreatesContainerCallsHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestPortForwardNoSuchContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestMatchImageTagOrSHA"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestPullWithSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestNodeConditions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestGarbageCollectBelowSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestContainerGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestGetImageRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestWriteLogsWithBytesLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestPodLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestPodAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/lifecycle TestRunHandlerHttpFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/cni TestLoNetNonNil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober/results TestUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestParseNodeAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestCRIHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestGetAttach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestServeAttach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestGeneratePodReadyCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestGeneratePodInitializedCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestSyncBatchNoDeadlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_MarkVolumeAsAttached_Positive_NewVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_DeletePodFromVolume_Positive_PodExistsVolumeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestGroupVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintHandlerError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestAllowMissingKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestNewServicesSourceApi_UpdatesAndMultipleServices"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestUDPProxyUpdateDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestLoadBalanceWorksWithMultipleEndpointsAndUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/util TestExecConntrackTool"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestTCPProxyStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestUDPProxyUpdatePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestLoadBalanceWorksWithMultipleEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestLoadBalanceWorksWithMultipleEndpointsAndUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/componentstatus TestGet_NoError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event TestGetAttrs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestDeleteNamespaceWithIncompleteFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod TestPortForwardLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestGenerationNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestExportService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestAllocate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestAllocateMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestForEach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversAPIGroupStarCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass TestStorageClassStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestGenerateContainerSecurityContextReadOnlyRootFS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/capabilities TestGenerateDrops"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/util TestPSPAllowsFSType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestHaRootUID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestGetCIDRs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestMergeFuncInvoked"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/exec TestExecutorNoArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/i18n TestTranslation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestEnsureRuleAlreadyExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestDeleteRuleAlreadyExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestDeleteRuleNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/mount TestGetDeviceNameFromMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/taints TestTaintsVar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/threading TestDeadlockWatchdogUnlocked"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume Test_ValidatePodTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_file TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_file TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/fc TestPluginPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestGetByName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/gce_pd TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestPluginVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestExtractTransportname"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/nfs TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/photon_pd TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/quobyte TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/quobyte TestPluginVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/quobyte TestPluginPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrAttachVolume_WaitForAttachError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrDeleteVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrDeleteVolume_VolumeNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Negative_SecondSubOpBeforeFirstCompletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_WaitEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/deny TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestEstimationBasedOnTheSameImageSameNamespace30d"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestLimitRangerAdmitPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/lifecycle TestAdmissionNamespaceActive"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/lifecycle TestAdmissionNamespaceTerminating"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitExceedQuotaLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitRejectsNegativeUsage"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitHostNetwork"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestScheduler"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestSchedulerFailedSchedulingReasons"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestBalancedResourceAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestInterPodAffinityAnnotationsPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestHardPodAffinityAnnotationsSymmetricWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestNodeAffinityPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/api/validation TestValidatePriorityWithZeroWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/api/validation TestValidateExtenderWithNonNegativeWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/api/validation TestValidateExtenderWithNegativeWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestDefaultErrorFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestInvalidFactoryArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/e2e_node/system TestValidateOS"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestServerPreferredResourcesRetries"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/plugin/pkg/client/auth/gcp TestHelperProcess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/plugin/pkg/client/auth/gcp TestCmdTokenSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestPreservesBaseTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestAbsPathPreservesTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestURLTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestDo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestCheckRetryClosesBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestTTLExpirationBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFO_addIfNotPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReflectorWatchHandlerError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReflectorListAndWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReflectorListAndWatchWithErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestCreateCleanDefaultCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestFileLocking"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestIsContextNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestIsEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd Example_noMergingOnExplicitPaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd Example_mergingEverythingNoConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api Example_minifyAndShorten"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestUpdateExpiredEvent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/clock TestFakeAfter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/bearertoken TestAuthenticateRequestTokenInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/bearertoken TestAuthenticateRequestBadValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/union TestAuthenticateRequestFailEarly"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authorization/authorizerfactory TestNewAlwaysDenyAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestSelfLinkSkipsEmptyName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestExport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateAllowsMissingNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateAllowsMismatchedNamespaceOnError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdatePreventsMismatchedNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateChecksDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestIsVowel"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreListResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestGracefulStoreCanDeleteIfExistingGracePeriodZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestGracefulStoreHandleFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestNotRestRoutesHaveAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/httplog TestDefaultStacktracePred"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/mux TestSecretHandlers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestObjectVersioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestDeleteUIDMismatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestDeleteWithRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchEtcdState"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchFromZeroIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatchList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/storagebackend/factory TestTLSConnection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestInfiniteList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestRandomWatchDeliver"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStreamError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/errors TestErrorNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/errors TestNewInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestRemoveInt64Factors"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityCanocicalizeZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource ExampleMustParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateObjectMetaUpdateIgnoresCreationTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestTimeMarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestVerbsProto"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_MismatchedTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_IgnoredConversionNested"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_MapsStringArrays"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_MapsStringArraysWithMappingKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestDeepCopySliceSeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestDeepCopyStruct"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestInvalidPtrValueKind"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestLabelConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestSelectorParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestStringMapConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestDecodeEmptyRawExtensionAsObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestEmbeddedRawExtensionMarshal"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestExtensionMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestKnownTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestConvertToVersionBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer TestVersionedEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/errors TestFilterOut"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/jsonmergepatch TestCreateThreeWayJSONMergePatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/rand TestInt63nRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringSetDifference"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsQualifiedName"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdTokenDelete"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner External should let an external dynamic provisioner create and delete persistent volumes [Slow]"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Beta should not provision a volume in an unmanaged GCE zone. [Slow]"
   },
   {
      "test_name" : "[k8s.io] GarbageCollect [Serial] Garbage Collection Test: One Non-restarting Container Should eventually garbage collect containers when we exceed the number of dead containers per container"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAliceNotForbiddenOrUnauthorized"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestImpersonateIsForbidden"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestDynamicClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAutoscalingPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAppsPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestBatchGroupBackwardCompatibility"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeRecycler"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeClaimLabelSelectorMatchExpressions"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeMultiPVs"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeProvisionMultiPVCs"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPodUpdateActiveDeadlineSeconds"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPodReadOnlyFilesystem"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/parser TestTypeKindParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestUnversionedWarning"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/election Test"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_doWithNestedErrorPropagation"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProcWithExceededActionQueueDepth"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestDQ_ordered_add_pop"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestEmptyOffer"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestInMemoryRegistry_State"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/service Test_DefaultResourceLimits"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestHasObjectMetaSystemFieldValues"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/errors TestErrorNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperResourcesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestKindToResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestGenericTypeMeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestGenericListMeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityCmpInt64AndDec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestMilliNewSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQFlagSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestTimeMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateObjectMetaUpdateIgnoresCreationTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/componentconfig/install TestInterfacesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/install TestInterfacesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversSingleAPIGroupsCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateChecksDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestParseTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestNewAlwaysDenyAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestReadOnly"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/union TestAuthorizationFirstPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/handlers TestAuthenticateRequestError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFO_addReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestEventfNoNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestEventAggregatorByReasonFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestSetsHeaders"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestURLTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestVerbs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteDaemon"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHorizontalPodAutoscalerList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNamespaceCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetPetSetWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodTemplateUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListEmptyPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestResourceQuotaUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateServiceStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/auth TestLoadFromFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestCertificateData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestLoadingEmptyMaps"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestFileLocking"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestConfirmUsableBadInfoButOkConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateMissingCAFileClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api TestMinifySuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/portforward TestParsePortsAndNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace TestSyncNamespaceThatIsTerminatingV1Beta1"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetQueueScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetSetControllerRespectsTermination"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetSetControllerRespectsOrder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetSetBlockingPetIsCleared"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestDefaultScaleUpRC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestSkySimpleSRVLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestSkyPodHostnameSRVLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestHeadlessServiceWithNamedPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestFieldGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/httplog TestHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestNewColumnPrinterFromTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribeEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestTemplateStrings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDetectImagesWithNewImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFreeSpaceTiesBrokenByDetectedTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestMakeVolumeMounts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestRegisterExistingNodeWithApiserver"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestExtractBandwidthResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestPuller"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestInstallThirdPartyAPIListOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/componentstatus TestGet_NoError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap TestConfigMapStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/daemonset TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/daemonset/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/daemonset/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/endpoint/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic TestSelectionPredicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic TestSingleMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreDeleteWithOrphanDependents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestInputStreamReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestInputStreamTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/limitrange/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace TestNamespaceStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim/etcd TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod TestCheckLogLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdCreateBinding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podsecuritypolicy/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podsecuritypolicy/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podtemplate TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podtemplate/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator/etcd TestStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator TestAllocate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator TestRangeSize"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/serviceaccount TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresource/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata TestEncodeToStreamForInternalEvent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestEmbeddedRawExtensionMarshal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestDecodeList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestScheme"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestDecodeUnstructured"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestCreateNilOutParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestPrefixEtcdKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchInterpretations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchFromZeroAndNoneZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchContextCancel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cache TestOverflow"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cache TestExpiredGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestIsInBackOffSinceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestGetClientIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestAddrs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/proxy TestProxyTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strategicpatch TestCustomStrategicMergePatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsCIdentifier"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsValidGroupId"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsValidIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestJitterUntilNegativeFactor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestRateLimitingQueue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestSplitYAMLDocument"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestGuessJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestScanYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestDecodeBrokenJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestRecyclerSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestWriteTwiceWithUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestSetUpAtInternal"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestLimitRangerCacheAndLRUMisses"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/password/passwordfile TestInsufficientColumnsPasswordFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/webhook TestWebhookTokenAuthenticator"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/discoverysummarizer TestRunDiscoverySummarizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeBindRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeClaimLabelSelectorMatchExpressions"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeMultiPVsDiffAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestLabelSelectorAsMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversNonResourceURLsStarAfterPrefixDoesntCover"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/filters TestImpersonationFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestAcceptedNoContentReturned"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestCreateMissingContextNoDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetControllerRespectsTermination"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns/treecache TestTreeCacheSetSubCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestLabelSelectorParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller TestControllerStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestDeleteNamespaceWithIncompleteFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestEtcdCreateDeploymentRollback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestGenerationNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestDecoratedWatcherError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestNonGracefulStoreHandleFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/versioning TestNestedEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestRandomWatchDeliver"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestCompactConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/storagebackend/factory TestTLSConnection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestFeatureGateFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestFeatureGateFlagDefaults"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestNamedCertKeyArrayFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestPatchTestType"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/deepcopy-gen/generators Test_extractTagParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset/planner TestMin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/audit TestAudit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetServerPreferredResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateScheduledJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetStorageClassWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestEnsureIPTablesMasqRuleErrorChecking"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storageclass/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/certificates TestNewCertificateRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetServerGroupsWithBrokenServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetServerPreferredResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestSetsHeaders"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestTransformResponse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestBackoffLifecycle"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_addReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReflectorResync"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestCreateCleanDefaultCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestResolveRelativePaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestMigratingFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestConfirmUsableEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestIsConfigurationInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateCertFilesNotFoundAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api TestMinifyMissingAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api Example_ofOptionsConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/transport TestBearerAuthRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/transport TestNew"
   },
   {
      "test_name" : "//cmd/genutils:go_default_test"
   },
   {
      "test_name" : "//cmd/libs/go2idl/client-gen/types:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/network/hairpin:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/rktshim:go_default_test"
   },
   {
      "test_name" : "//pkg/util/config:go_default_test"
   },
   {
      "test_name" : "//pkg/util/configz:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/util:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/sliceutils TestPodsByCreationTimeLess"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a batch of pods latency/resource should be within limit when create 105 pods with 300ms interval [Benchmark]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeletedDeploymentShouldCleanupOverlaps"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeletedDeploymentShouldNotCleanupOtherOverlaps"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestIsNodeReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestInfluxDBDataSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestCAFileMustExist"
   },
   {
      "test_name" : "//pkg/util/removeall:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestGetPVCMatchExpression"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestUpdateCachedPredicateItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestCurrentCertKeyFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestBasicIPLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestIPLimitIncrementFailOnTotalLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestGetPodsForJobRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestAddPod"
   },
   {
      "test_name" : "[k8s.io] Opaque resources should not break pods that do not consume opaque integer resources."
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestConfigMapStoreGetNeverRefresh"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestParseNodeAnnotation"
   },
   {
      "test_name" : "[k8s.io] Opaque resources should schedule pods that initially do not fit after enough  opaque integer resources are freed."
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestGetServiceHealthCheckNodePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestClearExternalTrafficPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficHealthCheckNodePortUserAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestGetReplicaSetsForDeploymentAdopt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestNewManagerNoBootstrap"
   },
   {
      "test_name" : "Deferred Stop kubemark"
   },
   {
      "test_name" : "[k8s.io] Load capacity [Feature:Performance] should be able to handle 30 pods per node { ReplicationController} with 0 secrets and 0 daemons"
   },
   {
      "test_name" : "ListResources Up"
   },
   {
      "test_name" : "[k8s.io] etcd Upgrade [Feature:EtcdUpgrade] [k8s.io] etcd upgrade should maintain a functioning cluster"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Pods should function for intra-pod communication: udp [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Variable Expansion should allow composing env vars into new env vars [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow][Feature:ExternalTrafficLocalOnly] should work for type=LoadBalancer [Slow][Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should update endpoints: http"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should function for endpoint-Service: http"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should update endpoints: udp"
   },
   {
      "test_name" : "[k8s.io] Pods should have their auto-restart back-off timer reset on image update [Slow]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should update nodePort: http [Slow]"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/ a RW PD, ungracefully remove it, then schedule it on another host [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl taint should update the taint on a node"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl run --rm job should create a job from an image, then delete the job [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Simple pod should support exec through an HTTP proxy"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl api-versions should check if v1 is in available api versions [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/two RW PDs both mounted to one container, write to PD, verify contents, delete pod, recreate pod, verify contents, and repeat in rapid succession [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Simple pod should handle in-cluster config"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] should run and stop complex daemon with node affinity"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that NodeSelector is respected if matching [Conformance]"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that a pod with an invalid NodeAffinity is rejected"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] [Serial] [Slow] ReplicaSet Should scale from 1 pod to 3 pods and from 3 to 5"
   },
   {
      "test_name" : "[k8s.io] Etcd failure [Disruptive] should recover from network partition with master"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0777,tmpfs) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0777,default) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Probing container with readiness probe should not be ready before initial delay and never restart [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy logs on node [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide podname only [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pods should be restarted with a docker exec \"cat /tmp/health\" liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Deployment deployment should support rollback when there's replica set with no revision"
   },
   {
      "test_name" : "[k8s.io] Job should scale a job up"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and ensure its status is promptly calculated."
   },
   {
      "test_name" : "[k8s.io] Job should run a job to completion when tasks succeed"
   },
   {
      "test_name" : "[k8s.io] Deployment overlapping deployment should not fight with each other"
   },
   {
      "test_name" : "[k8s.io] DNS should provide DNS for ExternalName services"
   },
   {
      "test_name" : "[k8s.io] Kibana Logging Instances Is Alive should check that the Kibana logging instance is alive"
   },
   {
      "test_name" : "[k8s.io] Deployment deployment reaping should cascade to its replica sets and pods"
   },
   {
      "test_name" : "[k8s.io] Generated release_1_5 clientset should create v2alpha1 cronJobs, delete cronJobs, watch cronJobs"
   },
   {
      "test_name" : "[k8s.io] ReplicationController should surface a failure condition on a common issue like exceeded quota"
   },
   {
      "test_name" : "[k8s.io] Projected should update labels on modification [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume as non-root [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume with mappings [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0666,default) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume with mappings and Item mode set[Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on localhost [k8s.io] that expects a client request should support a client that connects, sends data, and disconnects [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0666,tmpfs) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0644,tmpfs) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] Should not update pod when spec was updated and update strategy is OnDelete"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Disruptive][Flaky] when kubelet restarts Should test that a volume mounted to a pod that is deleted while the kubelet is down unmounts when the kubelet returns."
   },
   {
      "test_name" : "[k8s.io] kubelet [k8s.io] host cleanup with volume mounts [HostCleanup][Flaky] Host cleanup after pod using NFS mount is deleted [Volume][NFS] after deleting the nfs-server, the host should be cleaned-up when deleting a pod accessing the NFS vol [Serial]"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] with multiple PVs and PVCs all in same ns should create 3 PVs and 3 PVCs: test write access"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] when invoking the Recycle reclaim policy should test that a PV becomes Available and is clean after the PVC is deleted. [Volume][Serial][Flaky]"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Hazelcast should create and scale hazelcast"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Storm should create and stop Zookeeper, Nimbus and Storm worker servers"
   },
   {
      "test_name" : "[k8s.io] Federation secrets [Feature:Federation] Secret objects should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Federation replicasets [Feature:Federation] Federated ReplicaSet should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a batch of pods with higher API QPS latency/resource should be within limit when create 105 pods with 0s interval (QPS 60) [Benchmark]"
   },
   {
      "test_name" : "//jenkins/test_history:gen_html_test"
   },
   {
      "test_name" : "//jenkins/test_history:gen_json_test"
   },
   {
      "test_name" : "//mungegithub/mungers/approvers:go_default_test"
   },
   {
      "test_name" : "//prow/cmd/horologium:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/label:go_default_test"
   },
   {
      "test_name" : "//testgrid/config:go_default_test"
   },
   {
      "test_name" : "//velodrome/sql:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestSelfSubjectAccessReview"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestWebhookTokenAuthenticator"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/metrics TestMasterProcessMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/secrets TestSecrets"
   },
   {
      "test_name" : "//cmd/kube-apiserver/app/options:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/apis/kubeadm/install:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/apis/kubeadm/validation:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/master:go_default_test"
   },
   {
      "test_name" : "//cmd/mungedocs:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/deployment:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/kubefed:go_default_test"
   },
   {
      "test_name" : "//pkg/api/endpoints:go_default_test"
   },
   {
      "test_name" : "//pkg/api/events:go_default_test"
   },
   {
      "test_name" : "//pkg/api/pod:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/extensions:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/extensions/v1beta1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/client/listers/extensions/internalversion:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/ovirt:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/photon:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/statefulset:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/volume/persistentvolume:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/container:go_default_test"
   },
   {
      "test_name" : "//pkg/master:go_default_test"
   },
   {
      "test_name" : "//pkg/printers/internalversion:go_default_test"
   },
   {
      "test_name" : "//pkg/proxy/iptables:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/apps/petset/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/event/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/rest:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/thirdpartyresource/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/thirdpartyresourcedata:go_default_test"
   },
   {
      "test_name" : "//pkg/util/bandwidth:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/flocker:go_default_test"
   },
   {
      "test_name" : "//pkg/volume:go_default_xtest"
   },
   {
      "test_name" : "//pkg/volume/validation:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/deny:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/auth/authenticator/token/bootstrap:go_default_test"
   },
   {
      "test_name" : "//third_party/forked/golang/expansion:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Kubelet when scheduling a busybox command in a pod it should print the output to logs [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should not be able to pull non-existing image from gcr.io [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when starting a container that exits should report termination message if TerminationMessagePath is set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ContainerLogPath Pod with a container printed log to stdout should print log to correct log path"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestLinkRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestBadServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestServerError"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/preflight TestParseServerURIGood"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/cmd TestConfigDirCleaner"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/discovery TestFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestEtcdVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/preflight TestRunJoinNodeChecks"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/token TestGenerateToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestHeaderLines"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestBadLinks"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs Test_buildTOC"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/deployment TestParseFederationDeploymentPreference"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset TestParseFederationReplicaSetReference"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/service TestProcessEndpointDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/service TestProcessServiceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/kubefed TestJoinFederation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestVerifyDefaulting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestMatchTaint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultReplicationController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultConfigMapVolumeSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetMinimumScalePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePersistentVolumeClaim"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateDNSPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateReplicationControllerStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateBasicAuthSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestSetList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUnstructuredListSetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestDecodeList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestExperimentalEncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/authorization/validation TestValidateSARSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/authorization/validation TestValidateLocalSAR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/componentconfig TestIPVar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateIngressStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleValidResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/storage/validation TestValidateStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestOneLineFileNoNewLine"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestExampleFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestAuthorizeV0"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestSubjectMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestDescribeLoadBalancerOnDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestRegions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestNewCloudFromJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_parseMesosState"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_List"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/openstack TestReadConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/rackspace TestZones"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestNoSignNeeded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestCleanerNoExpiration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestParseSecretName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestGetJobFromTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestOneNodeDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestInsufficientCapacityNodeDaemonDoesNotLaunchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestInsufficentCapacityNodeDaemonDoesNotUnscheduleRunningPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSufficientCapacityWithTerminatedPodsDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNodeAffinityDaemonLaunchesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDaemonKillFailedPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNodeDaemonLaunchesToleratePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNodeShouldRunDaemonPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUpdatePodControllerRefRemoved"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestAddReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestGetOldRCs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestEqualIgnoreHash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestStatefulSetController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestUpdateDisruptedPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsProtocolUDP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsPreexisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestAllocateOrOccupyCIDRSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCIDRSet_AllocationOccupied"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestMonitorNodeStatusEvictPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCheckNodeKubeletVersionParsing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestMinReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestEventNotCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestUpscaleCap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcMissingMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestStatusUpdatesWithoutReplicasChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestRSSyncExpectations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestSyncReplicationControllerCreates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestWatchControllers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestPatchPodWithCorrectOwnerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestPatchExtraPodsThenDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestDoNotAdoptOrCreateIfBeingDeleted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/route TestReconcile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlNoOpUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdatePodStorageFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdatePodConflictSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdatePodConflictFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerGetStatefulSetsForPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddVolumeNode_Positive_ExistingVolumeNewNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_SetVolumeMountedByNode_Positive_UnsetWithInitialSetAddVolumeNodeNotReset"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_RemoveVolumeFromReportAsAttached"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_RemoveVolumeFromReportAsAttached_Delete_AddVolumeNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetVolumesToAttach_Positive_TwoNodesThreeVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestDeleteMultiSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestReadDockerConfigFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestKeyringHitWithQualifiedDockerHub"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestJwtProvider"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubeapiserver/admission TestWantsAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestMakeParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestNamespaceGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestFileServing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestReplicationControllerScaleInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestJobScaleInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestSecretGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGenerateService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestParseAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPodAndContainerAttach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAttach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAttachWarnings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteObjectNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteAllNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPatchObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printReplicationController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printPodWithWideFormat"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printPodHideTerminated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetNonExistentContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestUnsetStruct"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestTokenAndBasicDisallowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetBytes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestValidateCachesSchema"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestCheckInvalidErr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSingleItemImpliedRootScopedObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestLatest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestIsRootDiskSpaceAvailableWithSpace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdateNewNodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHasHostMountPVC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestTruncatePodHostname"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSyncPodsStartPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainerInfoForMirrorPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDoesNotDeletePodDirsIfContainerIsRunning"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestVolumeUnmountAndDetachControllerEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestLoadCertKeyBlocks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/client TestMakeTransportInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestLibcontainerAdapterAdaptToSystemdAsCgroupFs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestSoftRequirementsValidationSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewSourceApiserver_UpdatesAndMultiplePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewSourceApiserver_TwoNamespacesSameName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedSnapshot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedUpdatedRemoved"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestReadPodsFromFileInDirChanged"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestCacheSetAndGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestListContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestRemoveImageWithMultipleTags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestListLegacyPodSandbox"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestLabelsAndAnnotationsRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestNonParsableSandboxNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGarbageCollectNoMaxPerPodContainerLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodsUnhealthy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetDockerOptSeparator"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestCheckVersionCompatibility"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestMakePortsAndBindings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestMinReclaim"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestAllocatableMemoryPressure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestNodeConditionsLastObservedAt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestDetectImagesInitialDetect"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestGarbageCollectNotEnoughFreed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestParseLog"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestCreatePodSandbox"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/testing TestMultiPodParallelNetworkOps"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pleg TestRelistingWithSandboxes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pod TestGetSetPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestAddRemovePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestFormatURL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestFindPortByName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestInitialDelay"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestFailureThreshold"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestCleanUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestCheckVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestGarbageCollect"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestRootInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestSubcontainerContainerInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestAuthFilters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerLogsWithInvalidTail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeExecInContainerIdleTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServePortForward"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/portforward TestHTTPStreamReceived"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestConsume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestServeExec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestChangedStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/sysctl TestNamespacedBy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestSortInitContainerStatuses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/csr TestRequestNodeCertificateErrorCreatingCSR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_MarkVolumeAsAttached_Positive_ExistingVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_MarkDeviceAsMounted_Positive_NewVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master/tunneler TestIsTunnelSyncHealthy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribePodTolerations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestFormatResourceName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestUnknownTypePrinting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestTemplatePanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintHunmanReadableIngressWithColumnLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestTranslateTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestGetChainLinesMultipleTables"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestOnlyLocalLoadBalancing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestOnlyLocalNodePorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestMultiPortProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestUDPProxyUpdatePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestFilterWorks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestLoadBalanceWorksWithServiceRemoval"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestTCPProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestUDPProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestUDPProxyUpdateDeleteUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestValidateWorks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestLoadBalanceWorksWithSingleEndpoint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota/evaluator/core TestPersistentVolumeClaimsConstraintsFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/componentstatus TestList_UnknownError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryIPReallocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryIPUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator/storage TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator/storage TestStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/portallocator TestForEach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress TestIngressStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy TestNetworkPolicyStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget TestPodDisruptionBudgetStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/storage TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversVerbStarCoveringStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversNonResourceURLsWithOtherFieldsFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestAppliesTo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestValidateContainerSecurityContextFailures"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/group TestRunAsAnyValidte"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/selinux TestRunAsAnyOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/selinux TestRunAsAnyValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/util TestVolumeSourceFSTypeDrift"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/ssh TestSSHTunnel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestTrim"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestNextClassID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestExtractPodBandwidthResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestConfigurationChannels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestMergeInvoked"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestSimultaneousMerge"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_WaitWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/io TestSavePodToFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestFlushChain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestGetIPTablesHasCheckCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/procfs TestContainerNameFromProcCgroup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings TestEscapePluginName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/tail TestTail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/version TestBadSemanticVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestVolumePluginMgrFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestRecyclerPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cephfs TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cinder TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/configmap TestMakePayload"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestUnmountDevice"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestAllocateOutOfRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestDeleter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestExtractPortalAndIqn"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/photon_pd TestGetDeviceName_PersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/photon_pd TestAttachDetach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/quobyte TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestVolumeGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_SecondOpAfterFirstPanicsWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_UnmountDeviceConcurrently"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/vsphere_volume TestAttachDetach"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/defaulttolerationseconds TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestPodLimitFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/lifecycle TestAdmissionNamespaceForceLiveLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestMergeEnvFrom"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestIgnoresNonPodResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestRejectsMirrorPodWithServiceAccount"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestRejectsUnreferencedSecretVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestDoNotAddImagePullSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestControllerRoleLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodFitsHost"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestServiceAffinity"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodSchedulesOnNodeWithDiskPressureCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestImageLocalityPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithmprovider/defaults TestCompatibility_v1_Scheduler"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/api/validation TestValidatePriorityWithNoWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestNodeConditionPredicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestAddPodWillConfirm"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestAddPodAfterExpiration"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/e2e_node/system TestValidateCgroupSubsystem"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/e2e_node/system TestValidateKernelVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestServerPreferredResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestDeferredDiscoveryRESTMapper_CacheMiss"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestDeleteCollection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestNotCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestAuthPluginPersist"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestSetsNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestNewWay"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestValidatesHostParameter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestURLBackoffFunctionalityCollisions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/auth TestLoadFromFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_enqueueingNoLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_enqueueingWithLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFO_basic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestListenerResyncPeriods"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReadsDoNotCallPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache ExampleNewInformer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestInsecureOverridesCA"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestCreateCleanWithPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestCreateMissingContextNoDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestConflictingCurrentContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestConfirmUsableBadInfoConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestConfirmUsableEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateMissingCurrentContextConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/portforward TestParsePortsAndNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/portforward TestGetListener"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestWriteEventError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestDefaultEventFilterFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/transport TestTLSConfigKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestMultithreadedThrottling"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestThrottle"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestRateLimiterSaturation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/integer TestRoundToInt32"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/jsonpath TestKubernetes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/jsonpath TestFailParser"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/admission TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/headerrequest TestRequestHeader"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/union TestAuthenticateRequestSuppressUnnecessaryErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authorization/union TestAuthorizationError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestLogs"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetWithOptionsAndPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestConnectResponderError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateRequiresMatchingName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateWithName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateChecksDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestDelayReturnsError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWatchWebsocket"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreDeletionPropagation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestInputStreamInternalServerErrorTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestTimeBudget"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestWatchCacheBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestWaitUntilFreshAndList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestCompareResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchInterpretation_ResponseNoNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchInterpretation_ResponseBadData"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchListFromZeroIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatchContextCancel"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/names TestSimpleNameGenerator"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/feature TestFeatureGateFlagDefaults"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/proxy TestProxyTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestVersionedConn"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStreamSurvivesPanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/token/anytoken TestAnyTokenAuthenticator"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authorizer/webhook TestWebhookCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestPriorityRESTMapperResourceForErrorHandling"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestPriorityRESTMapperRESTMappingHonorsUserVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperResourcesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestSub"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestAddSubRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_meta"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_flags"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestSplitTerm"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestDeterministicParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestSetMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestSetSelectorParser"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestScheme"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestMetaValuesUnregisteredConvert"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/schema TestGroupResourceParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/streaming TestEmptyDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/versioning TestNestedDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/errors TestSingularAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestCloneTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestSplitSchemeNamePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/runtime TestCustomHandleCrash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringSetHasAny"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringIntersection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/strategicpatch TestSortMergeLists"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsDNS1123Label"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsWildcardDNS1123Subdomain"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestJitterUntilNegativeFactor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestPollImmediate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestReadRandomLineLengths"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestFilterStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestBroadcasterWatcherStopDeadlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/kube-aggregator/pkg/apiserver TestAPIsDelegation"
   },
   {
      "test_name" : "[k8s.io] Namespaces [Serial] should always delete fast (ALL of 100 namespaces in 150 seconds) [Feature:ComprehensiveNamespaceDraining]"
   },
   {
      "test_name" : "[k8s.io] Kubelet when scheduling a read only busybox container it should not write to root filesystem"
   },
   {
      "test_name" : "[k8s.io] Kubelet metrics api when querying /stats/summary it should report resource usage through the stats api"
   },
   {
      "test_name" : "[k8s.io] MirrorPod when create a mirror pod  should be recreated when mirror pod forcibly deleted"
   },
   {
      "test_name" : "[k8s.io] Container Manager Misc [Serial] Validate OOM score adjustments once the node is setup burstable container's oom-score-adj should be between [2, 1000)"
   },
   {
      "test_name" : "[k8s.io] MemoryEviction [Slow] [Serial] [Disruptive]   when there is memory pressure should evict pods in the correct order (besteffort first, then burstable, then guaranteed)"
   },
   {
      "test_name" : "[k8s.io] Container Manager Misc [Serial] Validate OOM score adjustments once the node is setup guaranteed container's oom-score-adj should be -998"
   },
   {
      "test_name" : "[k8s.io] [Feature:Federation] Federation API server authentication [NoCluster] should not accept cluster resources when the client has invalid HTTP Basic authentication credentials"
   },
   {
      "test_name" : "[k8s.io] [Feature:Federation] Federation API server authentication [NoCluster] should not accept cluster resources when the client has no authentication credentials"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeClaimLabelSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestRBAC"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestServiceAccountTokenAutoMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/parser TestParseSecondClosestCommentLines"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorLaunchAndKillTask"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorInitializeStaticPodsSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorFrameworkMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_doWithDeadProc"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/runtime TestUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/executorinfo TestRegistryGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestGeneratePodName"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestInMemoryRegistry_Update"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask/hostport TestDefaultHostPortMatching"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/service Test_awaitFailoverDoneFailover"
   },
   {
      "test_name" : "k8s.io/kubernetes/examples/apiserver TestRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestGetAffinityFromPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestIsList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestInt64AsCanonicalString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestUninitializedNoCrash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestDurationUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateObjectMetaNamespaces"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateObjectMetaUpdatePreventsDeletionFieldMutation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/abac/v0 TestConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestJobSpecConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversEnumerationNotCoveringResourceStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversNonResourceURLsWithOtherFieldsFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetWithOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWriteJSONDecodeError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetAttribs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestProxyRequestContentLengthAndTransferEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestPatchWithAdmissionRejection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/handlers TestAuthenticateRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToServiceLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReflectorResync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestUpdateCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReplaceCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestCreateBackoffManager"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/transport TestNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHTTPContainerInfoGetterGetRootInfoSuccessfully"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestRetryOnConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHorizontalPodAutoscalerGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetIngressWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestLimitRangeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestLimitRangeDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeClaimCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeClaimDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodTemplateCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodTemplateDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetControllerWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateCleanClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateEmptyAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateCertDataOverridesFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api TestMinifyMissingContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/portforward TestForwardPortsReturnsErrorWhenAllBindsFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSufficentCapacityNodeDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace TestFinalizeNamespaceFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestNodeDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetIDVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetSetControllerCreates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestQPSAllPending"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_MapsStringArraysWithMappingKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestNewKubeDNS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestHeadlessServiceEndpointsUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestSetString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestOneTermEqualSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestSetIsEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestDiscoveryAtAPIS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestDisabledVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestUpdateEtcdOverrides"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/httplog TestStatusIsNot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/httplog TestNewLogged"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestNewColumnPrinterFromSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintDaemonSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetByNameForcesFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestReplaceAliases"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFreeSpaceImagesInUseContainersAreIgnored"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGarbageCollectBelowSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestPluginValidation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestPluginStatusHook"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestPortForwardStreamReceived"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestEverything"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestSelectorMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestLexer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestSetSelectorParser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestGetServersToValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestThirdPartyDiscovery"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/endpoint/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreHandleFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreDeleteCollection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job TestJobStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/limitrange/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume/etcd TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdCreateBindingNoPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdCreateWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podsecuritypolicy/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob TestScheduledJobStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceStorageValidatesUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestExportService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestAllocateError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestCountBits"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator TestAllocateTiny"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/serviceaccount/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresource/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata TestCreater"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata TestExtractAPIGroupAndKind"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestDecodeEmptyRawExtensionAsObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/json TestDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/protobuf TestEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/recognizer TestRecognizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestWatcherTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchInterpretation_ResponseNotSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd/util TestGetEtcdVersion_ValidVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestFakeAfter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cache TestEvict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/deployment TestGetOldRCs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/diff TestObjectReflectDiff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/errors TestFilterOut"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flushwriter TestWriteError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/httpstream TestHandshake"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/intstr TestIntOrStringUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/intstr TestIntOrStringMarshalJSONUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/jsonpath TestFailParser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestGetIPFromInterface"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/rand TestPerm"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringSetEquals"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strategicpatch TestHasConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsDNS1123Subdomain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestItemExponentialFailureRateLimiter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestRecyclerAlreadyExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/empty_dir TestPluginTmpfs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch/versioned TestEncodeDecodeRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/oidc TestOIDCDiscoveryTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/oidc TestOIDCAuthentication"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/tokenfile TestInsufficientColumnsTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/webhook TestTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestGenericSchedulerWithExtenders"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestUsingEmptyTokenFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestSetListToMatchingType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversNonResourceURLsStarAfterPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestDeleteWithOptionsQuery"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRawRequestFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestAnonymousConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestTransformResponseNegotiate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestInClusterConfigNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetControllerCreates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestUpdatePetWithoutRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestUpdatePetWithFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns/config TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribePodDisruptionBudget"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/etcd TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestEtcdCreateDeploymentRollbackNoDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestCacheWatcherCleanupNotBlockedByResult"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestWaitUntilFreshAndGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestPollUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/union TestAuthenticateRequestFailEarly"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/webhook TestWebhookCacheAndRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestZeroRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/openapi TestBuildDefinitions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storageclass/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestIsConfigTransportTLS"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestNewRequestSetsAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestWithErrorWontChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestPreservesBaseTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestURI"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestDo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestNewWayReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestWasCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestUintParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestValidatesHostParameter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_UpdateResyncRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestTTLExpirationBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestGetIndexFuncValues"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestMultiIndexKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToNodeLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFOCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestInsecureOverridesCA"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestPrecedenceTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestCreateCleanWithPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestConflictingCurrentContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestConfirmUsableBadInfoConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestEventfNoNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/transport TestBasicAuthRoundTripper"
   },
   {
      "test_name" : "//cmd/kubeadm/app/phases/certs/pkiutil:go_default_test"
   },
   {
      "test_name" : "//pkg/kubeapiserver/authorizer/modes:go_default_test"
   },
   {
      "test_name" : "//pkg/master/tunneler:go_default_test"
   },
   {
      "test_name" : "//pkg/util/version:go_default_test"
   },
   {
      "test_name" : "//third_party/forked/etcd237/pkg/fileutil:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Volume Disk Format [Volumes] verify disk format type - thin is honored for dynamically provisioned pv using storageclass"
   },
   {
      "test_name" : "[k8s.io] GCP Volumes [k8s.io] NFSv4 should be mountable for NFSv4"
   },
   {
      "test_name" : "[k8s.io] Mesos starts static pods on every node in the mesos cluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationCRUD"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hostport TestEnsureKubeHostportChainLinked"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestGetPodSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestHawkularDataSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityDeepCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/discovery TestGetServerAddressByClientCIDRs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestRejectResetAccept"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] pinky Federated Ingresses Ingress connectivity and DNS should be able to connect to a federated ingress via its load balancer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestUpdateSymlinkNewFileNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestLoadCertKeyBlocksEmptyFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestLoadFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestUpdateNoRotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestParallelIPLimitHitIPLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestParallelIPLimitHitTotalLimit"
   },
   {
      "test_name" : "[k8s.io] Projected secret should be consumable from pods in volume with defaultMode set [Conformance] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/apiserver TestRuntimeConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestConfigMapStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficGlobal"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/service TestServiceController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHostIPCAllowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestNewManagerBootstrap"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow] should only target nodes with endpoints [Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Pods should function for intra-pod communication: http [Conformance]"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Deploy clustered applications [Feature:StatefulSet] [Slow] should creating a working CockroachDB cluster"
   },
   {
      "test_name" : "[k8s.io] Loadbalancing: L7 [Feature:Ingress] [k8s.io] GCE [Slow] [Feature: Ingress] should conform to Ingress spec"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] shouldn't increase cluster size if pending pod is too large [Feature:ClusterSizeAutoscalingScaleUp]"
   },
   {
      "test_name" : "[k8s.io] PetSet [Slow] [Feature:PetSet] [k8s.io] Basic PetSet functionality should provide basic identity [Feature:PetSet]"
   },
   {
      "test_name" : "[k8s.io] Services should only allow access from service loadbalancer source ranges [Slow]"
   },
   {
      "test_name" : "[k8s.io] Pod Disks Should schedule a pod w/ a readonly PD on two hosts, then remove both gracefully. [Slow]"
   },
   {
      "test_name" : "[k8s.io] Probing container should have monotonically increasing restart count [Conformance] [Slow]"
   },
   {
      "test_name" : "[k8s.io] Pod Disks Should schedule a pod w/ a RW PD, gracefully remove it, then schedule it on another host [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl run deployment should create a deployment from an image [Conformance]"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates resource limits of pods that are allowed to run [Conformance]"
   },
   {
      "test_name" : "[k8s.io] DaemonRestart [Disruptive] Scheduler should continue assigning pods to nodes across restart"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] [Serial] [Slow] Deployment Should scale from 1 pod to 3 pods and from 3 to 5"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings as non-root [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server that expects a client request should support a client that connects, sends no data, and disconnects [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide node allocatable (cpu) as default cpu limit if the limit is not set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Probing container should be restarted with a /healthz http liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] DNS should provide DNS for the cluster [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume as non-root with defaultMode and fsGroup set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0666,tmpfs) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubernetes Dashboard should check that the kubernetes-dashboard instance is alive"
   },
   {
      "test_name" : "[k8s.io] LimitRange should create a LimitRange with defaults and ensure pod has those defaults applied."
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's memory limit"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a replication controller."
   },
   {
      "test_name" : "[k8s.io] Deployment paused deployment should be ignored by the controller"
   },
   {
      "test_name" : "[k8s.io] Services should preserve source pod IP for traffic thru service cluster IP"
   },
   {
      "test_name" : "[k8s.io] Networking should provide unchanging, static URL paths for kubernetes api services"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality Scaling should happen in predictable order and halt if any pet is unhealthy"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality [StatefulSetBasic] Scaling down before scale up is finished should wait until current pod will be running and ready before it will be removed"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide node allocatable (memory) as default memory limit if the limit is not set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0644,default) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be able to mount in a volume regardless of a different secret existing with same name in different namespace [Volume]"
   },
   {
      "test_name" : "[k8s.io] Deployment test Deployment ReplicaSet orphaning and adoption regarding controllerRef"
   },
   {
      "test_name" : "[k8s.io] DNS configMap nameserver should be able to change stubDomain configuration"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable in multiple volumes in the same pod [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable in multiple volumes in a pod [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Garbage collector should delete pods created by rc when not orphaning"
   },
   {
      "test_name" : "[k8s.io] Secrets optional updates should be reflected in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's cpu request [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should update labels on modification [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] [Job] should create new pods when node is partitioned"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] Should update pod when spec was updated and update strategy is RollingUpdate"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Default should be disabled by removing the default annotation[Slow] [Serial] [Disruptive] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] should retry creating failed daemon pods"
   },
   {
      "test_name" : "Federation Up"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] with clusters DNS non-local federated service should be able to discover a non-local federated service"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] Federated Ingresses Ingress connectivity and DNS should be able to connect to a federated ingress via its load balancer"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] with clusters Federated Service should create matching services in underlying clusters"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] Federated Ingresses should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Garbage collector [Feature:GarbageCollector] should keep the rc around until all its pods are deleted if the deleteOptions says so"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a batch of pods latency/resource should be within limit when create 105 pods with 100ms interval [Benchmark]"
   },
   {
      "test_name" : "//prow/plugins/trigger:go_default_test"
   },
   {
      "test_name" : "//verify:verify-pylint"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestSubjectAccessReview"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestLocalSubjectAccessReview"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestBobIsForbidden"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestUnknownUserIsUnauthorized"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestReadOnlyAuthorization"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationAPI/apiGroupList"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestBatchPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestServiceAlloc"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicationcontroller TestAdoption"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/storageclasses TestStorageClasses"
   },
   {
      "test_name" : "//cmd/gke-certificates-controller/app:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/discovery/token:go_default_test"
   },
   {
      "test_name" : "//cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset:go_default_test"
   },
   {
      "test_name" : "//federation/apis/federation/install:go_default_test"
   },
   {
      "test_name" : "//hack:verify-gofmt"
   },
   {
      "test_name" : "//pkg/api/install:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/batch/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/cloudstack:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/garbagecollector/metaonly:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/resourcequota:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/cm:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/dockertools/securitycontext:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/preemption:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/volumemanager/cache:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/limitrange/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/node:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/persistentvolume:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/replicaset/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/rest:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/storage/storageclass:go_default_test"
   },
   {
      "test_name" : "//pkg/security/apparmor:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/seccomp:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/downwardapi:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/resourcequota/apis/resourcequota/validation:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/securitycontext/scdeny:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/auth/authorizer/rbac/bootstrappolicy:go_default_xtest"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when starting a container that exits should report termination message from log output if TerminationMessagePolicy FallbackToLogOnError is set [Conformance]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/genutils TestValidDir"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/preflight TestEtcdConnection"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateAuthorizationMode"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestGetControllerManagerCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestGetAuthzParameters"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestWriteCertAndKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestWriteCert"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestPathForPublicKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestCheckErr"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestParseTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestKubectlDashF"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestPreformatted"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs Test_updateTOC"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestPrependMacroBlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/apis/federation/install TestInterfacesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsAddDuplicateFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsRemove"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsRemoveGone"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestZonesID"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsAddSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsRemoveGone"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsReplaceAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset TestReplicaSetController"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/service TestProcessEndpointUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestFederatedUpdaterOK"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestFederatedUpdaterError"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestHandlers"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/planner TestEqual"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster TestMatchCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestProtobufRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/util TestGetVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestDefaultRequestIsNotSetForReplicationController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestTypeAny"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateDuplicateLabelsPassCases"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePodUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestEndpointAddressNodeNameInvalidDNSSubdomain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestTypeMetaSelfLinker"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/batch/validation TestValidateJobUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/batch/validation TestValidateCronJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidatePSPVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleMixedNonResourceAndResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestAuthorizeV1beta1"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/chaosclient TestPartialChaos"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/tests TestListWatchUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/remotecommand TestDial"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestFindVPCID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestIpPermissionExistsHandlesRangeSubsets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestGetVolumeLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestDeviceAllocatorError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileLoadBalancerAddPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileSecurityGroupNewServiceAddsPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestSecurityRulePriorityPicksNextAvailablePriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestDecodeInstanceInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/cloudstack TestZones"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_ExternalID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/openstack TestZones"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestSimpleSign"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestDetachedTokenIsValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestCleanerExpired"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestCleanerNotExpired"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestBadSecretName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestMismatchSecretName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/certificates TestCertificateController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cloud TestNodeDeleted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNoPortConflictNodeDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestPodIsNotDeletedByDaemonsetWithEmptyLabelSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestAddPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestSyncDeploymentDontDoAnythingDuringDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestUpdateReplicaSetRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestPodTemplateSpecHashFnv"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsPreexistingIdentical"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsWithLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestProcessEvent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector/metaonly TestDecodeToMetadataOnlyObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestControllerSyncJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestSyncJobExpectations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace/deletion TestFinalized"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace/deletion TestRetryOnConflictError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestNodeEventGeneration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestDeleteNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestUpdateNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpCMObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleUpCMObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcTolerance"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcMissingMetricsNoChangeEq"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcMissingMetricsNoChangeGt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestQpsSumEqualZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUZeroReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestPatchPodWithOtherOwnerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestDoNotAdoptOrCreateIfBeingDeleted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestSetCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestUpdateLabelsRemoveControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdateReplicasFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetDeletionTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestDefaultStatefulSetControlRecreatesFailedPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestDefaultStatefulSetControlUpdatePodFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestNewPodControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach Test_NewAttachDetachController_Positive"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddVolumeNode_Positive_NewVolumeNewNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumes_Positive_OneVolumeOneNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumesForNode_Positive_OneVolumeTwoNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddPod_Positive_NewPodNodeExistsVolumeDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetVolumesToAttach_Positive_TwoNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetVolumesToAttach_Positive_TwoNodesOneVolumeEach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/reconciler Test_Run_Positive_OneDesiredVolumeAttachThenDetachWithUnmountedVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestDeleteSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestMatchVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestDockerKeyringFromGoogleDockerConfigMetadataUrl"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubeapiserver/authorizer TestNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestIsZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGenerateJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestReplicationControllerScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestJobScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestJobScaleFailsPreconditions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentScaleRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestSecretForDockerRegistryGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyObjectWithoutAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyObjectOutput"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateDeploymentNoImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteObjectGraceZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDescribeUnknownSchemaObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDescribeUnknownNamespacedSchemaObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDrain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetObjectsIdentifiedByFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestWatchSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestWatchResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestLabelForResourceFromFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetIntoExistingStruct"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestAdditionalCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestMergeExistingContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCreateAuthInfoOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCurrentContextWithUnsetContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestUpdateSelectorForObjectTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestGetResourcesAndSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestDumpReaderToFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestPathBuilderWithMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestResourceNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestResourceByNameAndEmptySelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestReceiveMultipleErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestHelperReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainerInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPodPhaseWithRestartOnFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestExec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHostNetworkAllowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHostNetworkDisallowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestUpdateSymlinkReplaceExistingSymlink"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestCgroupMountValidationSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestCgroupMountValidationMultipleSubsytem"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedInvalidNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestExtractFromNonExistentFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestReadPodsFromFileExistAlready"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestHasPrivilegedContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestSetUpPodFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestGetSecurityOptSeparator"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifyHostConfigAndNamespaceOptionsForContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSeccompIsUnconfinedByDefaultWithDockerV110"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSeccompContainerAnnotationTrumpsPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSetEntrypointAndCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodWithPodInfraCreatesContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodDeadInfraContainerTeardown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestContainerNaming"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetImageRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestFindContainersByPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestLogSymLink"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestImageStatsWithImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools/securitycontext TestModifyContainerConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools/securitycontext TestModifySecurityOption"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestNodeReclaimFuncs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestCriticalPodsAreNotEvicted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestMakeSignalObservations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/gpu/nvidia TestMultiPodGPUAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestRemoveContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/preemption TestGetPodsToPreempt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestProbe"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestGetPodsFilters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestPreparePodArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerInfoWithUidNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestSyncBatchIgnoresNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestSetContainerReadiness"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestReconcilePodStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/sysctl TestWhitelist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_MarkVolumeAsAttached_SuppliedVolumeName_Positive_NewVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/reconciler Test_Run_Positive_VolumeMountControllerAttachEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/reconciler Test_Run_Positive_VolumeUnmountControllerAttachEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestReconcileEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers TestNewColumnPrinterFromTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPodDescribeResultsSorted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestGetPodsTotalRequests"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintLabelsMultiline"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestBadPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintEventsResultSorted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintHumanReadableWithNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintHPA"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestTCPProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestUDPProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestTCPProxyUpdatePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestStickyLoadBalanaceWorksWithMultipleEndpointsRemoveOne"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestStickyLoadBalanceWorksWithEndpointFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestMultiPortProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestUDPProxyStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestPackUnpackDnsMsgMultipleQuestions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota/evaluator/core TestServiceEvaluatorMatchesResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace TestNamespaceStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdUpdateNotScheduled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller TestControllerStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota TestResourceQuotaStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficAnnotationGlobal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress TestIngressStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestNonResourceURLCovers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/apparmor TestValidateValidHost"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/apparmor TestParseProfileName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/group TestRunAsAnyGenerateSingle"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/selinux TestMustRunAsOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/selinux TestMustRunAsGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestRunAsAnyOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/ssh TestTimeoutDialer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestReconcileInterfaceExistsWithNoqueue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/env TestGetEnvAsIntOrFallback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/exec TestExecutableNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_SecondOpAfterFirstCompletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_ThirdOpAfterFirstCompletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestReload"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/limitwriter TestLimitWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/procfs TestPidOf"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings TestJoinQualifiedName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings Example_noTrailingNewline"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/version TestGenericVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_file TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestDownwardAPI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestAttach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestWaitForAttach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestDetach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/gce_pd TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/git_repo TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestParseClassParameters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestGetDevicePrefixRefCount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/portworx TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrAttachVolume_AlreadyAttached"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrAttachVolume_VolumeNotFoundError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestVolumeCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestFindDeviceForPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_AttachVolumeConcurrently"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/vsphere_volume TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/imagepolicy TestNewFromConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/imagepolicy TestContainerCombinations"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestPersistentVolumeClaimLimitFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/securitycontext/scdeny TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestEditViewRelationship"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestBootstrapClusterRoles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestBootstrapClusterRoleBindings"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestRunGeneralPredicates"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestInterPodAffinity"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestHardPodAffinitySymmetricWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestFindFitAllError"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestAssumePodScheduled"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/list TestHandlePath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestDiscoveryRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestSerializer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestNewWayObj"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestUnacceptableParamNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest/watch TestDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest/watch TestEncodeDecodeRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_addUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_ReplaceMakesDeletions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_HasSyncedCorrectOnDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestTTLPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestInClusterConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateMissingReferencesConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateCleanCertFilesAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd Example_mergingSomeWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api TestMinifyMissingCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api TestMinifyMissingAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/transport TestAuthProxyRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/integer TestInt32Max"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/integer TestInt32Min"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestItemExponentialFailureRateLimiterOverFlow"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/group TestGroupAdder"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/bearertoken TestAuthenticateRequestTokenInvalidCustomError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestErrorList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetPretty"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetAlternateSelfLink"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestLegacyDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestPatchRequiresMatchingName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateChecksAPIVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestNumberConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers/negotiation TestNegotiate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/request TestGetAPIRequestInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/request TestUserContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestNonGracefulStoreHandleFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreDeleteCollectionNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestGetServerAddressByClientCIDRs"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/filters TestMaxInFlightNonMutating"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/httplog TestUnlogged"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/mux TestNewAPIContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/storage TestDisabledVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestHighWaterMark"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestWaitUntilFreshAndListTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestCreateNilOutParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchListIgnoresRootKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd/util TestEtcdHealthCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestCreateWithKeyExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/cache TestBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/cache TestOverflow"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/cache TestOverwrite"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/cache TestLRUOverflow"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/flag TestNamedCertKeyArrayFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/password/passwordfile TestBadPasswordFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/password/passwordfile TestInsufficientColumnsPasswordFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook TestTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/errors Test_reasonForError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestDec"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestAddSubRoundTripAcrossScales"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestDurationMarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestTimeMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestVerbsUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestDeepCopyMapSeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestEnforceNilPtr"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestSelectorParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestRequiresExactMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestParserLookahead"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestRequirementConstructor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestMetaValues"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/recognizer/testing TestRecognizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/versioning TestDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/errors TestPluralAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/intstr TestIntOrStringMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestParseIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestFinalIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestAddrs"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestChooseHostInterfaceFromRoute"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/rand TestString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsDNS1035Label"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsHTTPHeaderName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestFake"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should not be able to pull image from invalid registry"
   },
   {
      "test_name" : "[k8s.io] Loadbalancing: L7 [Feature:Ingress] [k8s.io] Nginx [Slow] [Feature: Ingress] should conform to Ingress spec"
   },
   {
      "test_name" : "[k8s.io] Federation replicasets [Feature:Federation] ReplicaSet objects [NoCluster] should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] Federation deployments [Feature:Federation] Deployment objects [NoCluster] should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] Without Clusters [NoCluster] should succeed when a service is created"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAuthModeAlwaysDeny"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPatchWithCreateOnUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestKubectlValidation"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestCreateTestTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestGetTestType"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/types TestExtractCommentTags"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/offers TestWalk"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_manyEndings"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestSlaveStorage_SlaveIds"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/executorinfo TestRegistryNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/service TestStaticPodValidator"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestMultiRESTMapperKindFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperGroupForResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperRESTMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestSetExtractListRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityParseZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultJobSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversMultipleAPIGroupsCoveringSingleRule"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversMultipleRulesMissingSingleVerbResourceCombination"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestConnectResponderObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestConnectWithOptionsRouteParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateChecksAPIVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateChecksAPIVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestProxyUpgrade"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/union TestAuthorizationNonePasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/handlers TestAuthenticateRequestFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_addUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_enqueueingNoLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_ResyncNonExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_ReplaceMakesDeletions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_addIfNotPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_KeyOf"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReAddExpiredItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFO_HasSynced"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToJobLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReflectorWatchHandlerError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestDefaultEventFilterFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestSetKubernetesDefaultsUserAgent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestWithErrorWontChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestOrdersNamespaceInPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/transport TestBasicAuthRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetSwaggerSchemaFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestEventDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateIngress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteIngress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestLimitRangeGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNamespaceList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNamespaceDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNamespaceWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodTemplateGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodSecurityPolicyList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListControllers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateThirdPartyResourceUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestBasicAuthData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestConfirmUsableBadInfoConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestConfirmUsableEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestConfirmUsableMissingConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestIsEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateMissingReferencesConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDSManagerNotReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/framework TestRCNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/gc TestGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetIDReset"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/service TestHostsFromNodeList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_byteSlice"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_GeneratedConversionOverriden"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestFieldHas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestHandleFuncWithAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestJSONPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrinters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestSortableResourceNamesSorting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetUnknownSchemaObjectListGeneric"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGarbageCollectImageNotOldEnough"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPortForwardNoSuchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/client TestNewKubeletClientTLSValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestReadPodsFromFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSecurityOptsOperator"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/qos/util TestGetPodQos"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestLexerSequence"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestRequirementConstructor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestFindExternalAddress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestInstallThirdPartyAPIPost"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment TestStatusUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/event/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreBasicExport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestGenericHttpResponseCheckerLimitReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/horizontalpodautoscaler/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress TestIngressStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/limitrange/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace TestNamespaceStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/networkpolicy/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/networkpolicy/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget TestPodDisruptionBudgetStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podsecuritypolicy/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota TestResourceQuotaStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryIPLoadBalancer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/serviceaccount/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/serviceaccount/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresource/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresource/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestStringMapConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestExtensionMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestUnstructuredListGetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer TestDirectCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/versioning TestDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestListAcrossDirectories"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestGuaranteedUpdateUIDMismatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchInterpretation_ResponseNoNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchInterpretation_ResponseBadData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestUnconditionalDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util Example_trailingNewline"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/deployment TestFindOldReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/errors TestEmptyAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestAlwaysFake"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestNeverFake"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flushwriter TestWriteWithFlush"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/jsonpath TestStructInput"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/rand TestInt63nRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/testing TestFakeHandlerPathNoBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsValidLabelValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation/field TestMakeFuncs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestWaitFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestCopyShifting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestGetDeviceName_Volume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestUntilTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/oidc TestOIDCDiscoverySecureConnection"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestWriteTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeRecycler"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestMakeClientConfigWithToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery TestAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/registered TestAddThirdPartyVersionsBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/registered TestAddThirdPartyVersionsMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestLogs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetControllerBlocksScaling"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestConfigSyncInitialMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestCustomHandlerChain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestGetNamedCertificateMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/authorizer TestNewAuthorizerFromAuthorizationConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintNodeExternalIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestValidOpenAPISpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestRangeAllocator_RandomishAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdCreateBindingNoPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestProxyUpgradeErrorResponse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/integer TestInt32Min"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/integer TestRoundToInt32"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStreamVersionedBase64"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/client/auth/gcp TestCmdTokenSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestPatchSubresourcesTestType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/certificates/install TestResourceVersioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateScheduledJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/certificates TestStrategyCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryExternalTrafficAnnotationHealthCheckNodePortAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryExternalTrafficAnnotationNegative"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storageclass/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestDeleteCollection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestAbsPathPreservesTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestOrdersSubResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestCheckRetryClosesBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestNewWayFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_requeueOnPop"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_compressorWorks"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_enqueueingNoLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReAddExpiredItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToNodeConditionLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToJobLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestRunUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReplaceCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestOldMergoLib"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestLoadingEmptyMaps"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateEmptyContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateCleanTokenAuthInfo"
   },
   {
      "test_name" : "//federation/pkg/dnsprovider:go_default_test"
   },
   {
      "test_name" : "//pkg/ssh:go_default_test"
   },
   {
      "test_name" : "//pkg/util/exec:go_default_test"
   },
   {
      "test_name" : "//pkg/util:go_default_test"
   },
   {
      "test_name" : "//pkg/util/limitwriter:go_default_test"
   },
   {
      "test_name" : "//pkg/util/parsers:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master/thirdparty TestHandleTPR"
   },
   {
      "test_name" : "[k8s.io] Mesos applies slave attributes as labels"
   },
   {
      "test_name" : "[k8s.io] Mesos schedules pods annotated with roles on correct slaves"
   },
   {
      "test_name" : "//triage:script_test"
   },
   {
      "test_name" : "//triage:summarize_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationCRUD/secret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDontDoAnythingIfBeingDeletedRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestDoNotAdoptOrCreateIfBeingDeletedRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestGCMDataSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestInfluxDBGetUsagePercentileCPU"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestInfluxDBGetUsagePercentileMemory"
   },
   {
      "test_name" : "//boskos:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestShouldRotate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestUpdateSymlinkReplaceExistingSymlink"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestIPLimitWithLocalHost"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestUpdatePodChangeControllerRef"
   },
   {
      "test_name" : "[k8s.io] Projected configmaps should be consumable from pods in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestConfigMapStoreGetAlwaysRefresh"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestCustomTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestDefaultExternalTrafficPolicyIfNeeded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestNeedsHealthCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficHealthCheckNodePortAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHostPIDDisallowed"
   },
   {
      "test_name" : "TearDown"
   },
   {
      "test_name" : "[k8s.io] Loadbalancing: L7 [k8s.io] GCE [Slow] [Feature:Ingress] should create ingress with given static-ip"
   },
   {
      "test_name" : "[k8s.io] Variable Expansion should allow substituting values in a container's args [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should increase cluster size if pods are pending due to host port conflict [Feature:ClusterSizeAutoscalingScaleUp]"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow][Feature:ExternalTrafficLocalOnly] should work for type=NodePort [Slow][Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] ScheduledJob should not emit unexpected warnings"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should update nodePort: udp [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl taint should remove all the taints with the same key off a node"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/ a RW PD shared between multiple containers, write to PD, delete pod, verify contents, and repeat in rapid succession [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Alpha should create and delete alpha persistent volumes [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl apply should reuse port when apply to an existing SVC"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that taints-tolerations is respected if not matching"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's memory limit [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume with mappings [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API should provide pod name and namespace as env vars [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server that expects a client request should support a client that connects, sends data, and disconnects [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Services should serve a basic endpoint from pods [Conformance]"
   },
   {
      "test_name" : "[k8s.io] PreStop should call prestop when killing a pod [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API should provide pod IP as an env var"
   },
   {
      "test_name" : "[k8s.io] hostPath should support r/w"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a secret."
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a pod."
   },
   {
      "test_name" : "[k8s.io] Pods should invoke init containers on a RestartAlways pod"
   },
   {
      "test_name" : "[k8s.io] V1Job should scale a job down"
   },
   {
      "test_name" : "[k8s.io] Services should prevent NodePort collisions"
   },
   {
      "test_name" : "[k8s.io] NodeProblemDetector [k8s.io] KernelMonitor should generate node condition and events for corresponding errors"
   },
   {
      "test_name" : "[k8s.io] Services should create endpoints for unready pods"
   },
   {
      "test_name" : "[k8s.io] InitContainer should not start app containers if init containers fail on a RestartAlways pod"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide node allocatable (cpu) as default cpu limit if the limit is not set"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality should handle healthy pet restarts during scale"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy to cadvisor using proxy subresource"
   },
   {
      "test_name" : "[k8s.io] Secrets should be able to mount in a volume regardless of a different secret existing with same name in different namespace"
   },
   {
      "test_name" : "[k8s.io] CronJob should schedule multiple jobs concurrently"
   },
   {
      "test_name" : "[k8s.io] Sysctls should not launch unsafe, but not explicitly enabled sysctls on the node"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on localhost [k8s.io] that expects a client request should support a client that connects, sends no data, and disconnects [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0644,tmpfs) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ServiceAccounts should allow opting out of API token automount [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume with defaultMode set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with defaultMode set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality [StatefulSetBasic] should adopt matching orphans and release non-matching pods"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality [StatefulSetBasic] Scaling should happen in predictable order and halt if any stateful pod is unhealthy"
   },
   {
      "test_name" : "[k8s.io] Garbage collector should orphan pods created by rc if deleteOptions.OrphanDependents is nil"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on localhost should support forwarding over websockets"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable in multiple volumes in a pod [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] CronJob should remove from active list jobs that have been deleted"
   },
   {
      "test_name" : "[k8s.io] Multi-AZ Clusters should spread the pods of a replication controller across zones"
   },
   {
      "test_name" : "[k8s.io] Firewall rule [Slow] [Serial] should create valid firewall rules for LoadBalancer type service"
   },
   {
      "test_name" : "[k8s.io] NoExecuteTaintManager [Serial] evicts pods from tainted nodes"
   },
   {
      "test_name" : "[k8s.io] DNS horizontal autoscaling [Serial] [Slow] kube-dns-autoscaler should scale kube-dns pods when cluster size changed"
   },
   {
      "test_name" : "Federation TearDown Previous"
   },
   {
      "test_name" : "[k8s.io] Cluster level logging using GCL [Flaky] should check that logs from containers are ingested in GCL"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] RethinkDB should create and stop rethinkdb servers"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] Federated Ingresses should create and update matching ingresses in underlying clusters"
   },
   {
      "test_name" : "[k8s.io] Federation deployments [Feature:Federation] Federated Deployment should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Federation deployments [Feature:Federation] Federated Deployment should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "[k8s.io] Federation namespace [Feature:Federation] Namespace objects should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "[k8s.io] Federation secrets [Feature:Federation] Secret objects should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "[k8s.io] Federation namespace [Feature:Federation] Namespace objects should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Garbage collector [Feature:GarbageCollector] should not be blocked by dependency circle"
   },
   {
      "test_name" : "[k8s.io] Resource-usage [Serial] [Slow] regular resource usage tracking resource tracking for 35 pods per node [Benchmark]"
   },
   {
      "test_name" : "//scenarios:kubernetes_e2e_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestImpersonateIsForbidden"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestRBAC"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestPatchWithCreateOnUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/configmap TestConfigMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationAPI"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationAPI/swaggerSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationAPI/support"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/garbagecollector TestNonBlockingOwnerRefDoesNotBlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestMasterService"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/metrics TestApiserverMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/quota TestQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeProvisionMultiPVCs"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/daemonset:go_default_test"
   },
   {
      "test_name" : "//pkg/api/v1/pod:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/apps/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/batch/v2alpha1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/controller/daemon/util:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/podautoscaler/metrics:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/serviceaccount:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/ttl:go_default_test"
   },
   {
      "test_name" : "//pkg/fieldpath:go_default_test"
   },
   {
      "test_name" : "//pkg/kubeapiserver/admission:go_default_test"
   },
   {
      "test_name" : "//pkg/kubeapiserver/options:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/cadvisor:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/envvars:go_default_xtest"
   },
   {
      "test_name" : "//pkg/kubelet/network/cni:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/secret:go_default_test"
   },
   {
      "test_name" : "//pkg/proxy/userspace:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/apps/petset:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/authorization/util:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/batch/cronjob:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/podtemplate:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/replicationcontroller/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/resourcequota/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/secret:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/portallocator:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/ingress/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/networkpolicy:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/rbac/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/util/io:go_default_xtest"
   },
   {
      "test_name" : "//pkg/volume/azure_dd:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/flexvolume:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/glusterfs:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/portworx:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/scaleio:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/alwayspullimages:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/antiaffinity:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/namespace/lifecycle:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/algorithm/predicates:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/schedulercache:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Container Lifecycle Hook when create a pod with lifecycle hook when it is exec hook should execute prestop exec hook properly [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when starting a container that exits should report termination message if TerminationMessagePath is set as non-root user and at a non-default path [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Lifecycle Hook when create a pod with lifecycle hook when it is http hook should execute poststart http hook properly [Conformance]"
   },
   {
      "test_name" : "[k8s.io] SimpleMount should be able to mount an emptydir on a container"
   },
   {
      "test_name" : "[k8s.io] Kubelet Cgroup Manager Pod containers On scheduling a BestEffort Pod Pod containers should have been created under the BestEffort cgroup"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] files with FSGroup ownership should support (root,0644,tmpfs)"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] volume on default medium should have the correct mode using FSGroup"
   },
   {
      "test_name" : "[k8s.io] AppArmor [Feature:AppArmor] when running with AppArmor should enforce a profile blocking writes"
   },
   {
      "test_name" : "[k8s.io] AppArmor [Feature:AppArmor] when running with AppArmor should enforce a permissive profile"
   },
   {
      "test_name" : "[k8s.io] Projected should provide podname as non-root with fsgroup and defaultMode [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings as non-root with FSGroup [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestTopFlagsBad"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/preflight TestCheckEtcdServersUri"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateTokenDiscovery"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestNewCertificateAuthority"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestWriteKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestTryLoadKeyFromDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/preflight TestConfigRootCAs"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestEmptyVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/token TestTokenParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestHasLine"
   },
   {
      "test_name" : "k8s.io/kubernetes/examples TestExampleObjectSchemas"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/apis/federation/install TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestZonesList"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsDifferentTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/daemonset TestDaemonSetController"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/planner TestWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/kubefed/init TestCertsHTTPS"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/hack TestLook"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestGetAccessModesFromString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestMatchTaint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestAccessorImplementations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestRoundTripTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/install TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/util TestGetGroupVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestTaintToString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestGetAffinityFromPodAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultPersistentVolumeClaim"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultNodeExternalID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultRequestsPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestGetLoadBalancerSourceRanges"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateResourceQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestIsValidSysctlName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestSetListToMatchingType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestSetExtractListRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestV1EncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUntilTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/autoscaling/v1 TestSetDefaultHPA"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/autoscaling/validation TestValidateScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateDaemonSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateIngress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleBinding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestBuildListener"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileLoadBalancerMultipleServices"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/cloudstack TestReadConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/gce TestComparingHostURLs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_listSlaves"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/ovirt TestOVirtCloudConfiguration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/ovirt TestOVirtCloudXmlParsing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestValidateSecretForSigning"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestSyncOne_Status"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestBadSelectorDaemonDoesNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNotReadyNodeDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUpdatePodOrphanSameLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDaemonSetUpdatesWhenNewPosIsNotReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDaemonSetUpdatesAllOldPodsNotReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDontSyncDeploymentsWithEmptyPodSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestGetReplicaSetsForDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestDeploymentComplete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestNakedPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestCheckLeftoverEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsEmptySelectorSelectsAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestNewGarbageCollector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestAttemptToDeleteItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestDeleteOwnerRefPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestSyncJobComplete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace/deletion TestFinalizeNamespaceFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCIDRSet_RandomishAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestGetBitforCIDR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestOccupy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestSwapLimiter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestFilterNoExecuteTaints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestDeletePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestZeroReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestMissingMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestEmptyMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleUpCMUnreadyLessScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcToleranceCMObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcMissingMetricsUnreadyScaleUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestRESTClientQpsSumEqualZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestStatusUpdatesWithoutReplicasChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestControllerUpdateReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestRCSyncExpectations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestAvailableReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestSyncResourceQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/service TestCreateExternalLoadBalancer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlCreatePodFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlDeletesStatefulPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerUpdatePodWithNoSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerDeletePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_SetVolumeMountedByNode_Positive_UnsetWithInitialSetVerifyDetachRequestedTimePerserved"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_RemoveVolumeFromReportAsAttached_Positive_Marked"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_MarkDesireToDetach_Positive_MarkedAddVolumeNodeReset"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_updateNodeStatusUpdateNeeded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeletePod_Positive_PodDoesNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetVolumesToAttach_Positive_TwoNodesOneVolumeEachExtraPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/reconciler Test_Run_Positive_DoNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestContainerRegistryNoServiceAccount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestRegexpMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDaemonSetStatusViewerStatusWithWrongUpdateStrategyType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGenerateAppsDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestValidateReplicationController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestSecretForTLSGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestSortingPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestSimpleStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestValidateAnnotationOverwrites"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestUnstructuredApply"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTarUntar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateSecretDockerRegistry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteObjectIgnoreNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteDirectory"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetListObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestWatchOnlyResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestValidateLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCertLeavesToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestDeleteContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestParseWithDotsEndingWithName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestParseWithBadValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestUpdateNewSelectorValuesForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestRefetchSchemaWhenValidationFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestCheckNoResourceMatchError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestURLBuilder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestResourceByName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestMultipleResourceByTheSameName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestListObjectWithDifferentVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFsInfoError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHandleHostNameConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestValidateContainerLogStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestCreateMirrorPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDeleteOrphanedMirrorPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDoesNotDeletePodDirsForTerminatedPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainersToDeleteInPodWithNoMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestKillPodNowFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestShouldRotate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedSnapshotAndUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestExtractFromBadDataFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestURLErrorNotExistNoUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestCacheGetPodDoesNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestEnvVarsToMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestForceUpdateIfOlder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestConvertToPullableImageID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestParsingCreationConflictError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDeleteContainerRemoveDeadContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGarbageCollectNoMaxLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGarbageCollect"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestToRuntimeContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDeleteImageWithMultipleTags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodWithPullPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodWithFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/gpu/nvidia TestPodContainerRestart"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestDetectImagesWithNewImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestFreeSpaceRemoveByLeastRecentlyUsed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestPodLogDirectoryGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/lifecycle TestResolvePortStringUnknown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hairpin TestFindPairInterfaceOfContainerInterface"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hostport TestEnsureKubeHostportChains"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/kubenet TestGenerateMacAddress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/preemption TestAdmissionRequirementsSubtract"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/qos TestGetPodQOS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestImageStats"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestCacheRefcounts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestCachingSecretManager"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeRunInContainerWithUID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestAuthenticationError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestGetExec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestGetPortForward"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestNewStatusSetsReadyTransitionTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestChangedStatusUpdatesLastTransitionTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestSyncBatchChecksMismatchedUID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestStaleUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_MarkVolumesReportedInUse_Positive_NewPodNewVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestGetNodeAddresses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master/tunneler TestSecondsSinceSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers TestNewColumnPrinterFromSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeHorizontalPodAutoscaler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintPodDisruptionBudget"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestNewMultipleSourcesEndpointsMultipleHandlersAddRemoveSetAndNotified"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/healthcheck TestHealthChecker"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestRangeAllocatorEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestLoadBalanceWorksWithSingleEndpoint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset TestStatefulSetStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/storage TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/authorization/subjectaccessreview TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/componentstatus TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod TestCheckGracefulDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod TestCheckLogLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestResourceLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdCreateWithContainersNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdCreateWithExistingContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceStorageValidatesCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/portallocator/controller TestRepairLeak"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/portallocator/controller TestRepairWithExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget TestPodDisruptionBudgetStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversNonResourceURLs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/apparmor TestValidateBadHost"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestValidateContainerSecurityContextSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestValidateAllowedVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/apparmor TestGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/seccomp TestNewStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/sysctl TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/serviceaccount TestReadPrivateKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/serviceaccount TestReadPublicKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/env TestGetEnvAsStringOrFallback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_SingleOp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_SecondOpAfterFirstPanics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestEnsureChainIpv4"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestCheckRuleWithoutCheckPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestCheckRuleWithoutCheckAbsent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestSaveAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/keymutex Test_SingleLock_NoUnlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/labels TestAddLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/labels TestCloneSelectorAndAddLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/mount TestReadProcMountsFrom"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/parsers TestParseImageName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/procfs TestPKill"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/slice TestSortStrings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/term TestWordWrapWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestGetVolumeName_PersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/empty_dir TestPluginEmptyRootContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestInit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/gce_pd TestGetDeviceName_Volume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestPluginPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestRecycler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestPluginPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestCollectDataWithDownwardAPI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrDetachVolume_VolumeNotAttached"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestUtilSaveConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestFindMultipathDeviceForDevice"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_SecondOpAfterFirstCompletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_ThirdOpAfterFirstCompletesWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_MountVolume_ConcurrentMountForAttachablePlugins"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/alwayspullimages TestOtherResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/imagepolicy TestTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestLimitRangerIgnoresSubresource"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/autoprovision TestAdmissionNamespaceExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/autoprovision TestIgnoreAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/persistentvolume/label TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmissionSetsMissingNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitLimitedResourceWithQuotaThatDoesNotCover"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitPrivileged"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestCreateProvidersFromConstraints"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/securitycontext/scdeny TestPodSecurityContextAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestFetchesUncachedServiceAccount"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestAllowsReferencedImagePullSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestRejectsUnreferencedImagePullSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestSchedulerNoPhantomPodAfterExpire"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodFitsResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestInterPodAffinityWithMultipleNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodAnnotationFitsSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithmprovider TestDefaultConfigExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestExpirePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestForgetPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/util TestBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestGetServerGroupsWithBrokenServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/plugin/pkg/client/auth/oidc TestClientCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestAcceptedNoContentReturned"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestNewRequestSetsAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestInvalidSegments"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestResultIntoWithErrReturnsErr"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_requeueOnPop"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_compressorWorks"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReAddExpiredItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFO_addReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReflectorStopWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestCreateCleanDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestResolveRelativePaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateEmptyContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateCleanTokenAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api TestShortenSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestBackoffReset"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestBackoffHightWaterMark"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/integer TestInt64Max"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/integer TestInt64Min"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/jsonpath TestStructInput"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/jsonpath TestJSONInput"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestLen"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/group TestAuthenticatedGroupAdder"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/token/tokenfile TestBadTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authorization/authorizerfactory TestPrivilegedGroupAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authorization/union TestAuthorizationNonePasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestSimpleSetupRight"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUnimplementedRESTStorage"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateInvokesAdmissionControl"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetArticleForNoun"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestRedirectOnMissingTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWatchHTTPAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWatchProtocolSelection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestImpersonationFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreDeleteWithOrphanDependents"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestDiscoveryAtAPIS"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestWaitUntilFreshAndGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestGuaranteedUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchInterpretation_ResponseNotSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestCreateWithTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/feature TestFeatureGateOverride"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/flushwriter TestWriteWithoutFlush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestMultiRESTMapperRESTMappings"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestPriorityRESTMapperKindForErrorHandling"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperGroupForResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperRESTMappings"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestInt64AmountAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityCmp"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQFlagIsPFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestNegateRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apimachinery TestAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apimachinery/registered TestAllPreferredGroupVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestDurationUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestDurationUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestVerbsUgorjiMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestVerbsUgorjiUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1/unstructured TestUnstructuredList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_WithConversionOverriden"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestDeepCopyPointerSeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestOneTermEqualSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestLabelGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestBadJSONRejection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/versioning TestDirectCodecEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/errors TestEmptyAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/errors TestAggregateGoroutines"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/httpstream/spdy TestUpgradeResponse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/intstr TestFromString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestGetIPFromInterface"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/strategicpatch TestNumberConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestExponentialBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestPoller"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestPollError"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdInitConfig"
   },
   {
      "test_name" : "Helm Charts"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should be able to pull image from gcr.io"
   },
   {
      "test_name" : "[k8s.io] Container Manager Misc [Serial] Validate OOM score adjustments once the node is setup Kubelet's oom-score-adj should be -999"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a sequence of pods latency/resource should be within limit when create 10 pods with 50 background pods"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestKindAuthorization"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestReadOnlyAuthorization"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestBatchPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestApiserverMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/types TestGetMarker"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorDisconnect"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/offers TestTimedOffer"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestDQ_sanity_check"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestDQ_Offer"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestDQ_negative_delay"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestFIFO_addDeleteAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/deleter TestDeleteOne_badPodNaming"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestDisconnect"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestSlaveStorage_Register"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestSlaveStorage_HostName"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/constraint TestSerialize"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/executorinfo TestEncodeDecodeNil"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/cmd/federation-apiserver/app TestLongRunningRequestRegexp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestEncode_Ptr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/errors TestFromObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestMultiRESTMapperResourceFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperKindsFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperResourceSingularizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestGenericTypeMetaAccessor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityAddZeroPreservesSuffix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestGroupResourceParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/batch/validation TestValidateScheduledJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/install TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversResourceStarCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversNonResourceURLsWithOtherFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestScopeNamingGenerateLink"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestErrorList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestSelfLinkSkipsEmptyName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetWithOptionsAndPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCORSAllowedOrigins"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestNegotiate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestHasUID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWatchHTTPAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWatchParamParsing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWatchProtocolSelection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authenticator/bearertoken TestAuthenticateRequestBadValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestTTLPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFOCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestWriteEventError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRESTClientRequires"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestSetTwiceError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetServerVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetDaemonSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHorizontalPodAutoscalerWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdatePetSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreatePetSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetServiceWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListThirdPartyResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestMergeContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestCreateClean"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestConflictingCurrentContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateCleanTokenAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api Example_emptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/testclient TestFakeImplementsInterface"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace TestRetryOnConflictError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace TestSyncNamespaceThatIsActive"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetIDName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestDefaultScaleUpReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_MapsStringArrays"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_flags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestEnforceNilPtr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestSimpleHeadlessService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestEverything"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestInstallAPIGroups"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestInstallSwaggerAPI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestGenerateStorageVersionMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/httplog TestLogOf"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestColumnPrint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribeDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribeCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintHumanReadableWithNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintPodShowLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDNSConfigurationParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/client TestNewKubeletClientTLSInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetUidFromUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestIsImagePresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestSelectWrongPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestSetIsEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestNamespaceSubresources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestNewBootstrapController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestDeleteServiceConnections"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/componentstatus TestList_UnknownError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestGenerationNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/daemonset/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestNoOpUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota/etcd TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob TestScheduledJobStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryDeleteExternal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryUpdateMultiPortExternalService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestBeforeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator/controller TestRepair"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresource/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestFmtRawDoc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestBadJSONRejection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestMetaValuesUnregisteredConvert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestExperimentalEncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/streaming TestDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestHasPathPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestReflectorForWatchCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestFiltering"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestGuaranteedUpdateNoChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestGuaranteedUpdateKeyNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestGuaranteedUpdate_CreateCollision"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestConditionalDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestFakeClockSleep"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestRunner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cache TestOverwrite"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/integer TestInt64Max"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/intstr TestGetValueFromIntOrPercent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestIptablesWaitFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestFinalIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/runtime TestCustomHandleError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringSetDifference"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringSetHasAny"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringUnion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strategicpatch TestSortMergeLists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/testing TestFakeHandlerWrongPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsValidPortNum"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation/field TestErrListFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestMaxOfRateLimiter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/empty_dir TestPluginRootContextSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestGetPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/lifecycle TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/webhook TestWebhookCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestFindFitSomeError"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/images TestGetAddonImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestGetAvoidPodsFromNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/group TestGroupAdder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFO_requeueOnPop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestHttpMethods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestCreateCleanDefaultCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetControllerRespectsOrder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestSyncStatefulSetBlockedPet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetReplicaCount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns/federation TestValidateName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribeNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestRangeAllocatorEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestDecoratedWatcher"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchFromZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchFromNoneZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/errors TestAggregateWithNil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestCloneTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/proxy TestDialURL"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/headerrequest TestRequestHeader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/certificates/install TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestImpersonationFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/audit TestConstructResponseWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestCountAvailablePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podgc TestGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/scheduledjob TestSyncOne_RunOrNot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestEnsureIPTablesMasqRuleNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestDiskPressureNodeFsInodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedByQoSDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryExternalTrafficAnnotationClusterIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storageclass/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetServerResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestBadRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestVersionedParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestTransformResponseNegotiate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestURLBackoffFunctionality"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFO_detectLineJumpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToServiceLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestConfirmUsableBadInfoButOkConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateMissingCAFileClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd Example_mergingEverythingNoConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestUpdateExpiredEvent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestLotsOfEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/transport TestUserAgentRoundTripper"
   },
   {
      "test_name" : "//cmd/libs/go2idl/openapi-gen/generators:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/dnsprovider/providers/coredns:go_default_test"
   },
   {
      "test_name" : "//pkg/util/goroutinemap:go_default_test"
   },
   {
      "test_name" : "//pkg/util/tail:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestCombine"
   },
   {
      "test_name" : "//pkg/kubelet/util/sliceutils:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/sliceutils TestStringInSlice"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/sliceutils TestPodsByCreationTimeSwap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/sliceutils TestByImageSizeLen"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationCRUD/Resources_should_not_be_deleted_from_underlying_clusters_when_OrphanDependents_is_nil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestOverlappingDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestAllFieldsHaveTags"
   },
   {
      "test_name" : "[k8s.io] GCP Volumes [k8s.io] GlusterFS should be mountable"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestIsCriticalPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/service TestSyncService"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestNoDataSourceFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestInsecureMustBeBool"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestAmountSign"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityProtoUnmarshal"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityParseNonNumericPanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestValidatePVCSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/leaderelection TestTryAcquireOrRenewEndpoints"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] pinky Federated Ingresses should create and update matching ingresses in underlying clusters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/removeall TestRemoveAllOneFilesystem"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestNewManagerNoRotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestCurrentPairFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestDeletePodOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/tolerations TestIsConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podtolerationrestriction TestPodAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUpdatePodRelease"
   },
   {
      "test_name" : "//plugin/pkg/admission/podtolerationrestriction:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/discovery TestSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/node TestEstablishMasterConnection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestConfigMapStoreDeletingConfigMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestClearExternalTrafficPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHostIPCDisallowed"
   },
   {
      "test_name" : "list nodes"
   },
   {
      "test_name" : "[k8s.io] Loadbalancing: L7 [k8s.io] GCE [Slow] [Feature:Ingress] should conform to Ingress spec"
   },
   {
      "test_name" : "ListResources Down"
   },
   {
      "test_name" : "ListResources After"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Deploy clustered applications [Feature:StatefulSet] [Slow] should creating a working redis cluster"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Deploy clustered applications [Feature:StatefulSet] [Slow] should creating a working mysql cluster"
   },
   {
      "test_name" : "[k8s.io] Variable Expansion should allow substituting values in a container's command [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should correctly scale down after a node is not needed [Feature:ClusterSizeAutoscalingScaleDown]"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should add node to the particular mig [Feature:ClusterSizeAutoscalingScaleUp]"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should increase cluster size if pending pods are small and there is another node pool that is not autoscaled [Feature:ClusterSizeAutoscalingScaleUp]"
   },
   {
      "test_name" : "[k8s.io] Addon update should propagate add-on file changes [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Guestbook application should create and stop a working application [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl describe should check if kubectl describe prints relevant information for rc and pods [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Update Demo should scale a replication controller [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl run pod should create a pod from an image when restart is Never [Conformance]"
   },
   {
      "test_name" : "SkewTest"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Beta should create and delete persistent volumes [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow] should work for type=NodePort"
   },
   {
      "test_name" : "[k8s.io] Nodes [Disruptive] [k8s.io] Resize [Slow] should be able to add nodes"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] [Serial] [Slow] ReplicationController Should scale from 5 pods to 3 pods and from 3 to 1 and verify decision stability"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that InterPodAffinity is respected if matching"
   },
   {
      "test_name" : "[k8s.io] Services should work after restarting kube-proxy [Disruptive]"
   },
   {
      "test_name" : "[k8s.io] Nodes [Disruptive] [k8s.io] Resize [Slow] should be able to delete nodes"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume as non-root [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's cpu request [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Probing container with readiness probe that fails should never be ready and never restart [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes volume on tmpfs should have the correct mode [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in env vars [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Probing container should *not* be restarted with a exec \"cat /tmp/health\" liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks should function for pod communication between nodes"
   },
   {
      "test_name" : "[k8s.io] MetricsGrabber should grab all metrics from a Scheduler."
   },
   {
      "test_name" : "[k8s.io] Pods should support retrieving logs from the container over websockets"
   },
   {
      "test_name" : "[k8s.io] MetricsGrabber should grab all metrics from a ControllerManager."
   },
   {
      "test_name" : "[k8s.io] Downward API should provide default limits.cpu/memory from node capacity"
   },
   {
      "test_name" : "[k8s.io] KubeletManagedEtcHosts should test kubelet managed /etc/hosts file"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable in multiple volumes in the same pod"
   },
   {
      "test_name" : "[k8s.io] Services should release NodePorts on delete"
   },
   {
      "test_name" : "[k8s.io] HostPath should support subPath [Conformance]"
   },
   {
      "test_name" : "[k8s.io] DisruptionController should create a PodDisruptionBudget"
   },
   {
      "test_name" : "[k8s.io] DisruptionController evictions: enough pods, absolute => should allow an eviction"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings as non-root [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality [StatefulSetBasic] Should recreate evicted statefulset"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Garbage collector should orphan pods created by rc if delete options say so"
   },
   {
      "test_name" : "[k8s.io] AppArmor should enforce an AppArmor profile"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should be able to delete a non-existent PD without error"
   },
   {
      "test_name" : "[k8s.io] PodPreset should not modify the pod on conflict"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:GCEPD should test that deleting the PV before the pod does not cause pod deletion to fail on PD detach"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should be able to detach from a node whose api object was deleted [Slow] [Disruptive] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir wrapper volumes should not cause race condition when used for git_repo [Serial] [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] with multiple PVs and PVCs all in same ns should create 2 PVs and 4 PVCs: test write access"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] with Single PV - PVC pairs create a PVC and non-pre-bound PV: test write access"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] with Single PV - PVC pairs create a PVC and a pre-bound PV: test write access"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] with Single PV - PVC pairs should create a non-pre-bound PV and PVC: test write access "
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Spark should start spark master, driver and workers"
   },
   {
      "test_name" : null
   },
   {
      "test_name" : "//images/pull_kubernetes_bazel:coalesce_test"
   },
   {
      "test_name" : "//mungegithub/github:go_default_test"
   },
   {
      "test_name" : "//mungegithub/mungers/matchers/event:go_default_test"
   },
   {
      "test_name" : "//prow/cmd/line:go_default_test"
   },
   {
      "test_name" : "//prow/crier:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/cla:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/lgtm:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestBootstrapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestSelfLinkOnNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/defaulttolerationseconds TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/openshift TestMasterExportsSymbols"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicaset TestUpdateLabelToBeAdopted"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicationcontroller TestUpdateSelectorToAdopt"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/scheduler TestAllocatable"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/thirdparty TestThirdPartyDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/thirdparty TestThirdPartyMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeMultiPVsPVCs"
   },
   {
      "test_name" : "//cmd/kube-proxy/app:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/discovery:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/phases/certs:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/preflight:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/secret:go_default_test"
   },
   {
      "test_name" : "//pkg/api/v1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/apis/apps/v1beta1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/apis/rbac/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/gce:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/deployment/util:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/disruption:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/volume/attachdetach/cache:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl/cmd/util:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/qos:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/util/cache:go_default_test"
   },
   {
      "test_name" : "//pkg/proxy/config:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/configmap/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/pod/rest:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/serviceaccount/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/daemonset/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/deployment/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/podsecuritypolicy/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/group:go_default_test"
   },
   {
      "test_name" : "//pkg/util/node:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/azure_file:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/host_path:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/iscsi:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/vsphere_volume:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/algorithmprovider:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/api/validation:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/factory:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Container Lifecycle Hook when create a pod with lifecycle hook when it is exec hook should execute poststart exec hook properly [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] volume on tmpfs should have the correct mode using FSGroup"
   },
   {
      "test_name" : "[k8s.io] Projected should provide podname as non-root with fsgroup [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/genutils TestNotDir"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestServerHelp"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/preflight TestCheckEtcdServersEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateCloudProvider"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestCertsVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestK8sVolumeMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs TestCreatePKIAssets"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs TestGetAltNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestPathsForCertAndKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestPathForCert"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/preflight TestRunInitMasterChecks"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubelet/app TestLoadRESTClientConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/go-to-protobuf/protobuf TestProtoSafePackage"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs Test_updateMacroBlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestZonesID"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestZonesList"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestZonesID"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsList"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsAddDuplicateFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/cluster TestUpdateClusterStatusOK"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/deployment TestDeploymentController"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestDeploymentCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestFederatedInformer"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/planner TestWithExistingAndCapacity"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/hack TestParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestGetReference"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestUniversalDeserializer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/install TestInterfacesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/testapi TestAutoscalingEncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/testapi TestBatchEncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestGetAccessModesFromString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestIsPodAvailable"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultNodeStatusAllocatable"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultSchedulerName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestAllowAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateReplicationController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateSSHAuthSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateHasLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestExtractList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestDecodeUnstructured"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUnstructuredListGetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/autoscaling/validation TestValidateHorizontalPodAutoscaler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/batch/v1 TestSetDefaultJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultReplicaSetReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateNetworkPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateNetworkPolicyUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateClusterRoleBinding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleZeroLengthNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestEmptyFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/tests TestForwardPortsReturnsErrorWhenAllBindsFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestSetKubernetesDefaults"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestNewAWSCloud"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestProxyProtocolEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestFilterTags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_ListClusters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_Master"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/openstack TestToAuthOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/openstack TestNodeAddresses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestUpdateSignature"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestValidateSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestSyncOne_RunOrNot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestGetParentUIDFromJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDeleteFinalStateUnknown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSimpleDaemonSetLaunchesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDontDoAnythingIfBeingDeleted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNameDaemonSetLaunchesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNameAndSelectorDaemonSetLaunchesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUnreachableNodeDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUpdatePodOrphanWithNewLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDeletePodOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestReentrantRollback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestUpdateReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestFindOldReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestSetCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestNoSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestTwoControllers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItems"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsPreexistingLabelsChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector/metaonly TestDecodeToMetadataOnlyObjectList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestJobPodLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestAllocateOrOccupyCIDRFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCIDRSetFullyAllocated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCloudProviderNoRateLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestMonitorNodeStatusMarkPodsNotReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCancel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestMaxReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestEventCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpRCImmediately"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleUpUnreadyLessScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleDownCMObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcEmptyMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPU"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestRESTClientCPU"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestRESTClientCPUEmptyMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podgc TestGCUnscheduledTerminating"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestWatchPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestUpdatePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestControllerUpdateRequeue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestControllerBurstReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestPatchExtraPodsThenDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestSyncReplicationControllerDoesNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestSyncReplicationControllerDeletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestControllerUpdateStatusWithFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestDoNotPatchPodWithOtherControlRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestPatchPodFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestObjectReplenishmentDeleteFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestAddQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlCreatePodPvcGetFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdatesObservedGeneration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControlReplacesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerCreates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerDeletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerAddPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerDeletePodOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerDeletePodTombstone"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestIdentityMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_VolumeNodeExists_Positive_VolumeExistsNodeDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumesForNode_Positive_TwoVolumeTwoNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddPod_Negative_NewPodNodeDoesntExistVolumeDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetVolumesToAttach_Positive_NoNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestAllPossibleAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestKeyringMissWithDockerHubCredentials"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/aws TestEcrProvide"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestContainerRegistryNoStorageScope"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestAPIRequests"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestUpdateRcWithRetries"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestReplicationControllerScaleFailsPreconditions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAnnotateLocal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestRunApplyViewLastApplied"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestOrphanDependentsInDeleteObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeletePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestSetupTTY"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetMultipleTypeObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetMultipleTypeObjectsWithDirectReference"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPortForwardWithPFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestTokenClearsBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetBase64Bytes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestAdditionalContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCurrentContextWithSetContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestCachedDiscoveryClient_Fresh"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestLabelsForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestFlagUnderscoreRenaming"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestURLBuilderRequireNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSingleResourceType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestYAMLStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSingleItemImpliedObjectNoExtension"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestMakeMounts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestNetworkErrorsWithoutHostNetwork"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGenerateAPIPodStatusWithSortedContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGenerateAPIPodStatusWithReasonCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGenerateAPIPodStatusInvokesPodSyncHandlers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestForgetNonExistingPodWorkers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cadvisor TestContainerLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestRotateCertCreateCSRError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestUpdateSymlinkExistingFileError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestLoadCertKeyBlocksPartialFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestCurrentPairFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm Test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestCgroupMountValidationMemoryMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestDecodeSinglePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestExtractFromEmptyDir"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestURLWithHeader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestGetIfNewerThanWhenPodExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestExpandCommandAndArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestShouldContainerBeRestarted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestGenerateContainerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestPodSyncResult"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestContainerCreationConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestListSandboxes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestSandboxStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestNetworkPluginInvocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestGetSystclsFromAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestNonParsableContainerNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDeleteContainerSkipRunningContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGarbageCollectNetworkTeardown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetSecurityOpts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDefaultSeccompProfileWithDockerV110"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSecurityOptsAreNilWithDockerV19"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestListImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestKillContainerInPodWithError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodCreatesNetAndContainerPullsImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodWithTerminationLog"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestIssue3797"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedbyDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedbyQoSDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestNodeConditionsObservedSince"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestDetectImagesContainerStopped"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestFreeSpaceTiesBrokenByDetectedTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestStableKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestSandboxGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestSyncPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hostport TestHostportManager"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hostport TestOpenHostports"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/kubenet TestTearDownWithoutRuntime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pleg TestRemoveCacheEntry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober/results TestCacheOperations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeAttachContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/portforward TestV4Options"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/stats TestCustomMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestSyncBatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/csr TestRequestNodeCertificateNoKeyData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/format TestResourceList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_AddPodToVolume_Positive_ExistingVolumeNewNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestTypeTags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribePodDisruptionBudget"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintNodeOSImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintPodShowLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/probe/exec TestExec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/probe/http TestHTTPProbeChecker"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/probe/tcp TestTcpHealthChecker"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestNewMultipleSourcesEndpointsMultipleHandlersAddedAndNotified"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestClusterIPReject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestBuildServiceMapAddRemove"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestBuildServiceMapServiceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestTCPProxyUpdateDeleteUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestUDPProxyUpdateDeleteUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestValidateWorks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestStickyLoadBalanceWorksWithNewServiceCalledSecond"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestSubtract"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestIsNegative"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/certificates/certificates TestStrategyCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/componentstatus TestList_FailedCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace TestNamespaceFinalizeStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestAllocateError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestContiguousAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/controller/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestGenerationNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/rest TestSyncAPIs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata TestExtractAPIGroupAndKind"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversMultipleRulesCoveringSingleRule"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversResourceNameEmptyCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/capabilities TestGenerateAdds"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/group TestMustRunAsOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/group TestRunAsAnyGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/async TestRunner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/dbus TestFakeDBus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_TwoOps"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_SecondOpAfterFirstCompletesWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestSave"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net/sets TestNewIPSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/slice TestSortInts64"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestChooseZoneForVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_dd TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cinder TestGetDeviceMountPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/configmap TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/gce_pd TestAttachDetach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/gce_pd TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestSetRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestAllocateNext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestAllocateConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrDetachVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrDetachVolume_VolumeAlreadyDetached"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestUtilMapVolumeSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestVolumeProvisioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_SecondOpAfterFirstPanics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_WaitWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_DetachVolumeConcurrently"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/validation TestValidatePersistentVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/exec TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/imagepolicy TestConfigNormalization"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestEstimationBasedOnTheSameImageAllNamespaces30d"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestEstimationBasedOnOtherImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestNoData"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestDefaultContainerResourceRequirements"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/lifecycle TestAdmissionNamespaceDoesNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestMergeEnv"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestAdmitConflictWithDifferentNamespaceShouldDoNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestAdmit"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitEnforceQuotaConstraints"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitSeccomp"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitCaps"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitSELinux"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitSysctls"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestAllowUnreferencedSecretVolumesForPermissiveSAs"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestMultipleReferencedSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestAdminEditRelationship"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestClusterRoleLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestNodeLabelPresence"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestInterPodAffinityAnnotationsWithMultipleNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates ExampleFindLabelsInSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestMostRequested"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestGenericSchedulerWithExtenders"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestSelectHost"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestNodeEnumerator"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestExpireAddUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/list TestCollect"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestGetSwaggerSchemaFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestNegotiateVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/plugin/pkg/client/auth/oidc TestVerifyJWTExpiry"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestIsConfigTransportTLS"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestAnonymousConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestURI"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestVerbs"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestAbsPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestURLBackoffFunctionality"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_UpdateResyncRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestGetIndexFuncValues"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestMultiIndexKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache Example"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestBasicTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestNonExistentCommandLineFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestMigratingFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestConfirmUsableMissingConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateCertFilesNotFoundAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateCertDataOverridesFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api TestMinifyMissingContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/transport TestImpersonationRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/integer TestIntMin"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestSimpleQueue"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestDeduping"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestAddTwoFireEarly"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestRateLimitingQueue"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/union TestAuthenticateRequestAdditiveErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/token/tokenfile TestTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authorization/authorizerfactory TestNewAlwaysAllowAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestDeleteWithOptionsQueryAndBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestDeleteMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWriteJSONDecodeError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestAudit"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestAuthenticateRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestAuthenticateRequestFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/metrics TestCleanUserAgent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/request TestNamespaceContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestGetNotFoundErr"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestGuaranteedUpdateUIDMismatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestUnconditionalDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestDeleteTriggerWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatchError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestWatcherTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/flushwriter TestWriteWithFlush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestRawConn"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStreamVersionedBase64"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStreamClosedDuringRead"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/password/passwordfile TestPasswordFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestMultiRESTMapperResourceFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestMultiRESTMapperKindFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateFinalizersPreventConflictingFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateObjectMetaUpdatePreventsDeletionFieldMutation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestLabelSelectorAsSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestAddLabelToSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestTimeUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestTimeUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion/unstructured TestFloatIntConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestDeterministicParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestSetMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestLabelMerge"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestNilMapIsValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestAddKnownTypesIdemPotent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer TestDirectCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/json TestDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/streaming TestDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/framer TestJSONFrameReaderShortBuffer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestProxierWithNoProxyCIDR"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/rand TestIntn"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/strategicpatch TestCustomStrategicMergePatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/strategicpatch TestReplaceWithRawExtension"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsValidPercent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestJitterUntilRecoversPanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestWaitFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestScanYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestReadSingleLongLine"
   },
   {
      "test_name" : "[k8s.io] MirrorPod when create a mirror pod  should be updated when static pod updated"
   },
   {
      "test_name" : "[k8s.io] Kubelet Cgroup Manager [Skip] QOS containers On enabling QOS cgroup hierarchy Top level QoS containers should have been created"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should not be able to pull from private registry without secret"
   },
   {
      "test_name" : "[k8s.io] MirrorPod when create a mirror pod  should be recreated when mirror pod gracefully deleted"
   },
   {
      "test_name" : "[k8s.io] Container Manager Misc [Serial] Validate OOM score adjustments once the node is setup docker daemon's oom-score-adj should be -999"
   },
   {
      "test_name" : "[k8s.io] [Feature:Federation] Federation API server authentication [NoCluster] should accept cluster resources when the client has token authentication credentials"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAuthorizationAttributeDetermination"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestSingleWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestSelfLinkOnNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestConfigMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestExtensionsPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeBindRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestServiceAccountAutoCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/generator TestSnippetWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestServerFlagsBad"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestServerError"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/minion/tasks TestMergeOutput"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/offers TestExpiredOffer"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_doWithNestedTwice"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestPopEmptyPQ"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestDFIFO_Offer"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/redirfd TestParseFileDescriptor"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestSlave_Lost"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/executorinfo TestEncodeDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/executorinfo TestLruCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestNodeSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/admission TestAdmit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestValidNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestFillObjectMetaSystemFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestExtractListV1"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestExtractListOfInterfacePtrs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestAPIObjectMeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestGenericObjectMeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestInt64AmountAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestParseQuantityString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityParseEmit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestNeg"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestAddSubRoundTripAcrossScales"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestDurationUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestGroupVersionParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestTimeUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestTimeUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateObjectMetaTrimsTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/apps/validation TestValidatePetSetUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/install TestInterfacesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversAPIGroupStarCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversVerbStarCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestExport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetNamespaceSelfLink"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestConnectWithOptionsAndPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateInvokesAdmissionControl"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateDefaultsAPIVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetAPIRequestInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authenticator/bearertoken TestAuthenticateRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_detectLineJumpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestTTLList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestRunUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReflectorListAndWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestUpdateExpiredEvent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestLotsOfEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestEventCorrelator"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestCheckRetryHandles429And5xx"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestValidatesHostParameter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestURLBackoffFunctionalityCollisions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestURLBackoffFunctionality"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetServerGroupsWithV1Server"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetServerResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestDiscoveryRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateDaemonSetUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestEventSearch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestEventList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNegotiateVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHorizontalPodAutoscalerUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHorizontalPodAutoscalerDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateIngressStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateIngress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeletePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodSecurityPolicyCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListServices"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteThirdPartyResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestToleratingMissingFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestMigratingFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateEmptyContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api TestMinifyMissingCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/testclient TestNewClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestInsufficentCapacityNodeDaemonDoesNotLaunchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeploymentController_dontSyncDeploymentsWithEmptyPodSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCleanupOrphanedPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetQueueScaleUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUSumEqualZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestAggregateSum"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestRCManagerNotReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_DefaultConvert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion/queryparams TestConvert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestHeadlessServiceWithDelayedEndpointsAddition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestNewHandlerContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestHandleWithAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/httplog TestUnlogged"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPersistentVolumeDescriber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestVersionedPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestYAMLPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestReclaimResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestPluginTearDownHook"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestControllerServicePorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestInstallThirdPartyAPIList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestInstallThirdPartyAPIGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/componentstatus TestList_NoError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/componentstatus TestList_FailedCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/endpoint/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestProxyUpgrade"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestInputStreamInternalServerErrorTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/horizontalpodautoscaler/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress TestIngressStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job TestJobStrategyWithGeneration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/limitrange/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestDeleteNamespaceWithIncompleteFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod TestCheckGracefulDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdUpdateScheduled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/rest TestPodLogValidates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podtemplate/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceStorageValidatesCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator/controller TestRepairWithExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/portallocator TestSnapshot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/serviceaccount/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestDeepCopyOfRuntimeObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestSendResultDeleteEventHaveLatestIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestCreateWithTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestGuaranteedUpdateWithTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchErrResultNotBlockAfterCancel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestFakeTick"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/errors TestPluralAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/intstr TestFromInt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/json TestEvaluateTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/jsonpath TestJSONInput"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/jsonpath TestParser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestIsInterfaceUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestIPNetEqual"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestNewStringSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/testing TestFakeHandlerPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/testing TestFakeHandlerWrongMethod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsQualifiedName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsHTTPHeaderName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation/field TestErrorUsefulMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestPollForever"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStreamClosedDuringRead"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestUntilErrorCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestFake"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/autoprovision TestAdmissionNamespaceExistsUnknownToHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/password/allow TestAllowEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/x509 TestX509"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestZeroRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestPrioritiesRegistered"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestBatchGroupBackwardCompatibility"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-discovery/app TestClusterInfoIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestGenerateToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestRandBytes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestMultiRESTMapperRESTMappings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestPriorityRESTMapperRESTMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestObjectMetaGenerationUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultHorizontalPodAutoscalerCpuUtilization"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_UpdateResyncRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_HasSyncedCorrectOnDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestListWatchUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestBadRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestServerPreferredNamespacedResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestInClusterConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetControllerDeletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/authorizer TestNewAlwaysAllowAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/filters TestMaxInFlight"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/openapi TestBuildSwaggerSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestFormatResourceName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintPodDisruptionBudget"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestAllowMissingKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestTail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestIgnoreDeleteNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdCreateFailsWithoutNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdCreateWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdUpdateNotScheduled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdUpdateScheduled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/integer TestInt32Max"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsDNS1035Label"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStreamVersionedCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestRaceFreeFake"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test TestCmdTokenGenerateTypoError"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/types Test_Type_IsAssignable"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset TestAnalyze"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/certificates/install TestInterfacesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/scheduledjob TestSyncOne_Status"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storageclass/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetSwaggerSchema"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestNotCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestHttpMethods"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestAuthPluginPersist"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_basic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_ReplaceMakesDeletions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFO_requeueOnPop"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFO_addUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToDaemonSetLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToPodLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReflectorResyncChan"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestUndeltaStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestUpdateCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeleteCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd Example_mergingSomeWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api TestShortenSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestWriteEventError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestDefaultEventFilterFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestEventCorrelator"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/transport TestTLSConfigKey"
   },
   {
      "test_name" : "//pkg/probe/exec:go_default_test"
   },
   {
      "test_name" : "//pkg/util/slice:go_default_test"
   },
   {
      "test_name" : "//pkg/util/term:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestComputeTaintDifference"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestSelectorUpdatedBefore"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdJoinDiscoveryToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdJoinTLSBootstrapToken"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] pinky Federated Ingresses should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestUpdateSymlinkNoSymlink"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestIsSafeToOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStateSetControllerAddPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStateSetControllerAddPodNoSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podtolerationrestriction/apis/podtolerationrestriction/validation TestValidateConfiguration"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/discovery TestType"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/node TestCreateClients"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/node TestCheckAPIEndpoint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestAddOrRemoveNoScheduleTaintByCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestCachingConfigMapManager"
   },
   {
      "test_name" : "//cmd/kube-discovery/app:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestSetServiceHealthCheckNodePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestGetServiceHealthCheckPathPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficGlobalBeta"
   },
   {
      "test_name" : "[k8s.io] Kubelet Container Manager [Serial] Validate OOM score adjustments once the node is setup guaranteed container's oom-score-adj should be -998"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestShouldRotate/half_way"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestLen"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow] should handle updates to source ip annotation [Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "get kubeconfig"
   },
   {
      "test_name" : "Test"
   },
   {
      "test_name" : "[k8s.io] Density [Feature:HighDensityPerformance] should allow starting 95 pods per node using { ReplicationController} with 0 secrets and 0 daemons"
   },
   {
      "test_name" : "[k8s.io] Empty [Feature:Empty] does nothing"
   },
   {
      "test_name" : "ListResources Before"
   },
   {
      "test_name" : "download_gcloud"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Pods should function for node-pod communication: udp [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Cluster level logging using Elasticsearch [Feature:Elasticsearch] should check that logs from containers are ingested into Elasticsearch"
   },
   {
      "test_name" : "[k8s.io] PetSet [Slow] [Feature:PetSet] [k8s.io] Deploy clustered applications [Slow] [Feature:PetSet] should creating a working redis cluster [Feature:PetSet]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl apply should apply a new configuration to an existing RC"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Update Demo should create and stop a replication controller [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Simple pod should support inline execution and attach"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that a pod with an invalid podAffinity is rejected because of the LabelSelectorRequirement is invalid"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that required NodeAffinity setting is respected if matching"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that InterPodAffinity is respected if matching with multiple Affinities"
   },
   {
      "test_name" : "[k8s.io] Pods Delete Grace Period should be submitted and removed [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable via environment variable [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Services should provide secure master service [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0644,tmpfs) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Deployment deployment should create new pods"
   },
   {
      "test_name" : "[k8s.io] V1Job should scale a job up"
   },
   {
      "test_name" : "[k8s.io] Networking should provide unchanging, static URL paths for kubernetes api services [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Deployment RollingUpdateDeployment should delete old pods and create new ones"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] ReplicationController light Should scale from 2 pods to 1 pod"
   },
   {
      "test_name" : "[k8s.io] V1Job should run a job to completion when tasks sometimes fail and are locally restarted"
   },
   {
      "test_name" : "[k8s.io] PrivilegedPod should test privileged pod"
   },
   {
      "test_name" : "[k8s.io] Job should run a job to completion when tasks sometimes fail and are locally restarted"
   },
   {
      "test_name" : "ThirdParty resources Simple Third Party creating/deleting thirdparty objects works [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Network should set TCP CLOSE_WAIT timeout"
   },
   {
      "test_name" : "[k8s.io] HostPath should support subPath"
   },
   {
      "test_name" : "[k8s.io] DisruptionController should update PodDisruptionBudget status"
   },
   {
      "test_name" : "[k8s.io] Deployment iterative rollouts should eventually progress"
   },
   {
      "test_name" : "[k8s.io] DisruptionController evictions: no PDB => should allow an eviction"
   },
   {
      "test_name" : "[k8s.io] CronJob should not emit unexpected warnings"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide container's memory request [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on 0.0.0.0 should support forwarding over websockets"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality [StatefulSetBasic] should allow template updates"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable in multiple volumes in the same pod [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be able to mount in a volume regardless of a different secret existing with same name in different namespace [Volume]"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a persistent volume claim with a storage class. [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should provide node allocatable (cpu) as default cpu limit if the limit is not set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] PodPreset should create a pod preset"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:GCEPD should test that deleting the Namespace of a PVC and Pod causes the successful detach of Persistent Disk"
   },
   {
      "test_name" : "[k8s.io] EmptyDir wrapper volumes should not cause race condition when used for configmaps [Serial] [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Pods should have monotonically increasing restart count [Conformance] [Slow]"
   },
   {
      "test_name" : "ThirdParty resources [Flaky] [Disruptive] Simple Third Party creating/deleting thirdparty objects works [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Federation deployments [Feature:Federation] Federated Deployment should create and update matching deployments in underlying clusters"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] Federated Ingresses should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "//kettle:model_test"
   },
   {
      "test_name" : "//mungegithub/mungers:go_default_test"
   },
   {
      "test_name" : "//prow/cmd/hook:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/heart:go_default_test"
   },
   {
      "test_name" : "//testgrid/config/yaml2proto:go_default_test"
   },
   {
      "test_name" : "//verify:verify-gofmt"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestAuthModeAlwaysAllow"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestAliceNotForbiddenOrUnauthorized"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestMultiWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestDynamicClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/evictions TestConcurrentEvictionRequests"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/kubectl TestKubectlValidation"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicaset TestAdoption"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicaset TestUpdateLabelToRemoveControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/scheduler TestSchedulerExtender"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/scheduler TestMultiScheduler"
   },
   {
      "test_name" : "//cmd/kubelet/app:go_default_test"
   },
   {
      "test_name" : "//federation/registry/cluster/etcd:go_default_test"
   },
   {
      "test_name" : "//federation/registry/cluster:go_default_test"
   },
   {
      "test_name" : "//pkg/api:go_default_xtest"
   },
   {
      "test_name" : "//pkg/api/v1:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/garbagecollector:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/podautoscaler:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl/cmd/set:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/config:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/container:go_default_xtest"
   },
   {
      "test_name" : "//pkg/kubelet:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/kuberuntime:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/network/kubenet:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/volumemanager/reconciler:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/replicationcontroller:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/secret/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/serviceaccount:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/networkpolicy/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/policy/poddisruptionbudget/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/sysctl:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/cinder:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/git_repo:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/util/nestedpendingoperations:go_default_test"
   },
   {
      "test_name" : "[k8s.io] MirrorPod when create a mirror pod  should be recreated when mirror pod gracefully deleted [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings as non-root with FSGroup [Feature:FSGroup]"
   },
   {
      "test_name" : "[k8s.io] Kubelet when scheduling a busybox command that always fails in a pod should be possible to delete"
   },
   {
      "test_name" : "[k8s.io] Kubelet Cgroup Manager QOS containers On enabling QOS cgroup hierarchy Top level QoS containers should have been created"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] files with FSGroup ownership should support (root,0644,tmpfs) [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] volume on tmpfs should have the correct mode using FSGroup [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] new files should be created with FSGroup ownership when container is non-root [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/gke-certificates-controller/app TestGKESigner"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestCobraSubCommandHelp"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/preflight TestCheckEtcdServers"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-controller-manager/app TestIsControllerEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateAPIServerCertSANs"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/images TestGetCoreImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestComponentProbe"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs TestCheckAltNamesExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestTryLoadCertFromDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestVersionFromNetwork"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/kubeconfig TestCreateWithCerts"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/token TestValidateToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubelet/app TestValueOfAllocatableResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestGoodLinks"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestAppendMacroBlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/apis/federation/validation TestValidateCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsAdditionVisible"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsReplaceAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsAddSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/namespace TestNamespaceController"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestDelayingDeliverer"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestDeploymentEquivalent"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/eventsink TestEventSink"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/planner TestMin"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/planner TestMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestDeepCopyApiObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/testapi TestResourcePathWithPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestNodeSelectorRequirementsAsSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestTolerationToleratesTaint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestDefaultResourceHelpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestPodSpecConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestResourceListConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaulServiceTargetPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultObjectFieldSelectorAPIVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePersistentVolumeClaimUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateRestartPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateSecurityContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidPodLogOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestAPIObjectMeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestValidateListType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUnstructuredSetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestDecodeObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/abac/v1beta1 TestV1Beta1Conversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/apps/v1beta1 TestDefaultDeploymentAvailability"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/batch/v2alpha1 TestSetDefaultCronJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultDaemonSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateDeploymentStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateDeploymentRollback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleNamespacedNonResourceURL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/settings/validation TestValidateEmptyPodPreset"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/settings/validation TestValidatePodPresets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileLoadBalancerNodeHealth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestSecurityRulePriorityFailsIfExhausted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/gce TestGetRegion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_createDefaultConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_TcpLoadBalancer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/openstack TestParseMetadata"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/rackspace TestToAuthOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/vsphere TestReadConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller TestActiveReplicaSetsFiltering"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestComputeDetachedSig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/certificates TestSigner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestCleanupFinishedJobs_DeleteOrNot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSelectorDaemonLaunchesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSelectorDaemonDeletesUnselectedPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestBadNameDaemonSetDoesNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNumberReadyStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestObservedGeneration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUpdatePodChangeControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon/util TestGetPodTemplateWithGeneration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestGetReplicaSetsForDeploymentAdoptRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestScaleDownOldReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeploymentController_reconcileOldReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsPreserveNoSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestDependentsRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestSyncJobUpdateRequeue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestIsJobFinished"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestMissingReports"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleDownRCImmediately"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestPatchPodWithCorrectOwnerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestReadyReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestRemoveCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/serviceaccount TestTokenCreation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControlScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestDefaultStatefulSetControlUpdateSetStatusFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddVolumeNode_Positive_ExistingVolumeExistingNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeletePod_Positive_NodeDoesNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestControllerCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fieldpath TestExtractResourceValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestAppsDeploymentGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestRollingUpdater_cleanupWithClients"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestAddDeploymentHash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentStatusViewerStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentScaleInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAnnotateMultipleObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestComplete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateSecretGeneric"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestExtraArgsFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestResourceErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDescribeObjectShowEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDescribeObjectSkipEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetUnknownSchemaObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestLabelLocal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestLog"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestReplaceObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestReplaceMultipleObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestReplaceDirectory"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestUnsetField"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetIntoNewStruct"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestAdditionalAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestEmbedNoKeyOrCertDisallowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestTokenLeavesCert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetClusters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetContextsAllNameNoHeader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetContextsSelectOneOfTwo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config Example_view"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestNewCachedDiscoveryClient_TTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestCanBeExposed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestMaybeConvert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestKindFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestWatchMultipleError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestMultipleTypesRequested"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSpaceAvailable"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestIsRuntimeDiskSpaceAvailableWithoutSpace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetRawContainerInfoSubcontainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdateExistingNodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdateExistingNodeOutOfDiskStatusWithTransitionFrequency"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestRegisterWithApiServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPodPhaseWithRestartAlways"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSyncPodsDeletesWhenSourcesAreReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPrivilegeContainerAllowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSyncPodsSetStatusToFailedForPodsThatRunTooLong"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestVolumeAttachAndMountControllerDisabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainersToDeleteInPodWithFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainersToDeleteInPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestNewManagerNoRotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestResourceConfigForPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestNodeAllocatableReservationForScheduling"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedDefaultNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestInitialEmptySet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestCacheNotInitialized"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestContainerStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestRemoveImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestConvertLegacyNameAndLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestListLegacyContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestGetSandboxSecurityOpts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDeleteImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodCreateNetAndContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetRestartCount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestVerifyNonRoot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestParseThresholdConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedbyInodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestThresholdsMet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestThresholdsUpdatedStats"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestThresholdsMetGracePeriod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestGetStarvedResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestRemoveImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestWriteLogs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestGetPodStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestContainerLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/hairpin TestSetUpInterfaceNotBridged"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/kubenet TestGetPodNetworkStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/kubenet TestTeardownCallsShaper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/testing TestPluginManager"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pleg TestDetectingContainerDeaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pleg TestRelistWithCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pleg TestRelistWithReinspection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/preemption TestEvictPodsToFreeRequests"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestCleanupRepeated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestGetTCPAddrParts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestSecretStoreDeletingSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestIsSubPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestHealthCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestSyncLoopCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeWSMultiplePortForward"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestChangedStatusKeepsStartTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestUnchangedStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestSyncBatchCleanupVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestDeletePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/sysctl TestNewWhitelist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_AddPodToVolume_Positive_NewPodNewVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/reconciler Test_Run_Positive_VolumeAttachAndMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master/tunneler TestGenerateSSHKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestCustomTypePrinting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestCustomTypePrintingWithKind"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestNamePrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintNodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintNodeExternalIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestServiceAddedRemovedSetAndNotified"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestNewMultipleSourcesServicesAddedAndNotified"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestNewMultipleSourcesServicesMultipleHandlersAddedAndNotified"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestDeleteEndpointConnections"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables Test_accumulateEndpointsMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestLoadBalanceWorksWithMultipleEndpointsMultiplePorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestLoadBalanceFailsWithNoEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestEquals"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestIsZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset TestStatefulSetStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job TestJobStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/componentstatus TestList_NoError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace TestNamespaceStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node TestMatchNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdCreateFailsWithoutNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryCreateMultiNodePortsService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryIPAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficBetaAnnotationHealthCheckNodePortUserAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator TestAllocate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator TestAllocateSmall"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator TestRangeSize"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/storage TestErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/storage TestStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestEtcdCreateDeploymentRollback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversNonResourceURLsWithOtherFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestCreateContainerSecurityContextNonmutating"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/group TestGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestStringDiff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestDeleteRuleErrorCreating"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestRestore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/keymutex Test_DoubleLock_DoubleUnlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/mount TestSafeFormatAndMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings TestIsVowel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/threading TestDeadlockWatchdogLocking"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestMountOptionFromSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestGetMetricsStatFS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestGetVolumeName_Volume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_dd TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestIsVolumeAttached"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestTearDownAt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/gce_pd TestGetDeviceName_PersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestNewInvalidRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/nfs TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/nfs TestPluginPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestPluginReboot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/rbd TestPluginVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/rbd TestPluginPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestUtilApplyConfigDefaults"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestValidatePath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestWriteOnce"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_SecondOpAfterFirstCompletesWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_ThirdOpAfterFirstCompletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/vsphere_volume TestGetDeviceName_Volume"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/alwayspullimages TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/antiaffinity TestInterPodAffinityAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestNamespaceAware"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestTaqQuery"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitHandlesCreatingUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitPodInNamespaceWithoutQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitBelowBestEffortQuotaLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestHasUsageStats"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitHostIPC"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestIgnoresNilObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestRejectsMirrorPodWithSecretVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestAutomountsAPIToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/storageclass/default TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestNoStarsForControllers"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestSchedulerNoPhantomPodAfterDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestDiskConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestAWSDiskConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestEBSVolumeCountConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodSchedulesOnNodeWithMemoryPressureCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestPriorityMetadata"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestNodePreferAvoidPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestSelectorSpreadPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/e2e_node/system TestValidateCachedKernelConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestGetServerVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestGetServerResourcesWithV1Server"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestGetServerResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestGetSwaggerSchema"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestServerPreferredNamespacedResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestCreateBackoffManager"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestAuthPluginWrapTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestWithErrorWontChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestAbsPathJoins"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestUintParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_detectLineJumpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestUndeltaStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestCertificateData"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestCreateClean"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestInClusterConfigNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateCleanWithCAClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/transport TestBasicAuthRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/clock TestFakeClock"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/jsonpath TestParser"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestItemExponentialFailureRateLimiter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestItemFastSlowRateLimiter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestNoMemoryLeak"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestReinsert"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/admission TestAdmit"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/union TestAuthenticateRequestNoAuthenticators"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/x509 TestX509"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/serviceaccount TestMakeUsername"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestNonEmptyList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetBinary"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestDeleteWithOptionsQuery"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestLegacyDeleteIgnoresOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWatchWebsocketClientClose"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestAuditNoPanicOnNilUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestGetAuthorizerAttributes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestPatchWithVersionConflictThenAdmissionFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestInputStreamReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/rest TestValidNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/filters TestCORSAllowedOrigins"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/filters TestTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchPurposefulShutdown"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd/util TestGetEtcdVersion_ValidVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd/util TestGetEtcdVersion_ErrorStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestGuaranteedUpdateWithTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatchErrResultNotBlockAfterCancel"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/feature TestFeatureGateFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/flushwriter TestWriteError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStreamBase64"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/password/allow TestAllowEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityAddZeroPreservesSuffix"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityRoundUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestDurationMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestDurationMarshalJSONUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestUgorjiMarshalJSONWithOmit"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestFieldGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestEscapeValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestSelectorMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/schema TestGroupVersionParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer TestTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer TestBadJSONRejection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/diff TestObjectReflectDiff"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/httpstream/spdy TestRoundTripAndNewConnection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/mergepatch TestHasConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestGetClientIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/strategicpatch TestStrategicMergePatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsValidGroupId"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsValidLabelValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation/field TestErrorUsefulMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation/field TestErrListFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestJitterUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestPoll"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestYAMLOrJSONDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/kube-aggregator/pkg/apiserver TestAPIs"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdInitAPIPort"
   },
   {
      "test_name" : "[k8s.io] InodeEviction [Slow] [Serial] [Disruptive] [Flaky] when we run containers that should cause Disk Pressure due to Inodes should eventually see Disk Pressure due to Inodes, and then evict all of the correct pods"
   },
   {
      "test_name" : "[k8s.io] Kubelet [Serial] [Slow] [k8s.io] experimental resource usage tracking [Feature:ExperimentalResourceUsageTracking] resource tracking for 100 pods per node"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] Should not update pod when spec was updated and update strategy is on delete"
   },
   {
      "test_name" : "[k8s.io] GarbageCollect [Serial] Garbage Collection Test: Many Pods with Many Restarting Containers Should eventually garbage collect containers when we exceed the number of dead containers per container"
   },
   {
      "test_name" : "[k8s.io] [Feature:Federation] Federation API server authentication [NoCluster] should accept cluster resources when the client has certificate authentication credentials"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] Federated Ingresses [NoCluster] should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] [Feature:Federation] Federation API server authentication [NoCluster] should not accept cluster resources when the client has invalid token authentication credentials"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAutoscalingGroupBackwardCompatibility"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestExpansionInterface"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/import-boss/generators TestRemoveLastDir"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestBadServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/node TestRegister_withUnknownNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/offers TestListen"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_singleActionThatPanics"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_doWithNestedX"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_doWithNestedXConcurrent"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestDFIFO_sanity_check"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestFIFO_basic"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestFIFO_detectLineJumpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/runtime Test_LatchAcquireBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/deleter TestDeleteOne_PendingPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestResourceOffer_Add_Rescind"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestProcureRoleResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestInMemoryRegistry_NotFinished"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask/hostport TestWildcardHostPortMatching"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/service TestFindMappedPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestMultiRESTMapperResourcesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestInt64AmountAsInt64"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestDetectOverflowScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityCanocicalizeZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestDurationMarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestGroupVersionMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestLabelSelectorAsSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestTimeMarshalJSONUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/registered TestAllPreferredGroupVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/install TestResourceVersioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/install TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversResourceNameEmptyCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestAppliesTo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRole"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestConnectResponderError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestConnectWithOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateRequiresMatchingName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateChecksDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWriteRAWJSONMarshalError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestPatchWithVersionConflictThenAdmissionFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_enqueueingWithLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_DeleteExistingNonPropagated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestTTLExpirationBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFO_basic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFO_addUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestPreservesBaseTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestVersionedParamsFromListOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestDo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestNewWay"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/transport TestBearerAuthRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetDaemonSetWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateDaemonSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetNodeWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListPetSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodTemplateList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestServiceProxyGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestCreateCleanDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestMigratingFileSourceMissingSkip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateCertFilesNotFoundAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateMultipleMethodsAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd Example_noMergingOnExplicitPaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api TestMinifyMissingAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSufficentCapacityWithTerminatedPodsDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeploymentController_cleanupOldReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_IgnoredConversionNested"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_fuzz"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_meta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestDeepCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestDeepCopyPointerSeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestFederationQueryWithoutCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestRequiresExactMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/healthz TestMulitipleChecks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDefaultDescribers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintHandlerError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestTemplatePanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintNodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestTranslateTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSingularObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFreeSpaceImagesAlsoDoesLookupByRepoDigests"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGarbageCollectNotEnoughFreed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainerInfoWhenCadvisorFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPrivilegeContainerDisallowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestMakePortMappings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestMilliCPUToQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestPLEGHealthCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestSetString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestDeterministicParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/endpoint/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/event TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreDeleteCollectionWithWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestIgnoreDeleteNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podtemplate/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryUpdateExternalService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresource/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestKnownTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestDecodeNumbers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestV1EncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestWaitUntilFreshAndListTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestCompareResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchFromZeroIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchListFromZeroIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestWatchPurposefulShutdown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd/util TestIsEtcdNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cache TestBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/deployment TestFindNewReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/errors TestAggregateGoroutines"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestSlowBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestIncrementThrottle"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/httpstream/spdy TestUpgradeResponse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestChooseHostInterfaceFromRoute"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestPortRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/runtime TestHandleCrash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringSetList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsDNS952Label"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation/field TestPathMultiArg"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestJitterUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestPoller"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestAddWhileProcessing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestWriteWithUnixPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/basicauth TestBasicAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestFindFitAllError"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestLongRunningRequestRegexp"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestUseGivenTokenIfValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation/path TestValidatePathSegmentName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/union TestAuthorizationError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/testing/cache TestRCNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetServerGroupsWithBrokenServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestNegotiateVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestUpdatePetRetrySucceed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestSimpleExternalService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns/federation TestValidateDomain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestAnyResourcesForGroupEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/filters TestTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/httplog TestDefaultStacktracePred"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribeStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopPodWithLabelSelectorMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestLabelConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller TestControllerStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/recognizer/testing TestRecognizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/clock TestFakeTick"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestItemExponentialFailureRateLimiterOverFlow"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestNoMemoryLeak"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestDefaultMode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestUntilMultipleConditionsFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/anytoken TestAnyTokenAuthenticator"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/oidc TestTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test TestCmdTokenGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset/planner TestMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteScheduledJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/scheduledjob TestGetRecentUnmetScheduleTimes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/openapi TestBuildProtocolList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestEnsureIPTablesMasqRuleAlreadyExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestEnsureIPTablesMasqRuleErrorCreating"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestCreateSandbox"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedByDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storageclass TestStorageClassStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storageclass/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetServerVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRESTClientRequires"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestSetTwiceError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestInvalidSegments"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestNewWayObj"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_ResyncNonExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_addIfNotPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFO_HasSynced"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReflectorStopWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReflectorListAndWatchWithErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api TestMinifyMissingContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api TestMinifyMissingCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api Example_minifyAndShorten"
   },
   {
      "test_name" : "//hack/boilerplate:boilerplate_test"
   },
   {
      "test_name" : "//pkg/probe/http:go_default_test"
   },
   {
      "test_name" : "//pkg/util/async:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Probing container should be restarted with a docker exec liveness probe with timeout [Conformance]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestSyncDeploymentClearsOverlapAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestGuaranteedUpdateDropsSuggestionOnConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestSelectorUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestUpdatePodCondition"
   },
   {
      "test_name" : "Stage"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl apply apply set/view last-applied"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestEstimateReturnsErrorFromSource"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Beta should test that deleting a claim before the volume is provisioned deletes the volume. [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestZonesToSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestVolumeZoneConfInvalidZonesInStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestAdoptJobs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestSetDeletionGeneration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/rancher TestRancherCredentialsProvide"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestIPLimitIncrementAndDecrement"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestParallelIPLimitAccessNoLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestGetPodsForJob"
   },
   {
      "test_name" : "[k8s.io] Projected configmap optional updates should be reflected in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/kubeaggregator TestRunKubeAggregator"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestRunWithRuntimeConfigAll"
   },
   {
      "test_name" : "[k8s.io] Deployment lack of progress should be reported in the deployment status [Flaky]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficHealthCheckNodePortAllocationBeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficHealthCheckNodePortUserAllocationBeta"
   },
   {
      "test_name" : "[k8s.io] Kubelet Container Manager [Serial] Validate OOM score adjustments once the node is setup Kubelet's oom-score-adj should be -999"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach Test_AttachDetachControllerStateOfWolrdPopulators_Positive"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestFilterKnownUserResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestCurrentNoFiles"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] Pods should be evicted from unready Node [Feature:TaintEviction] All pods on the unreachable node should be marked as NotReady upon the node turn NotReady AND all pods should be evicted after eviction timeout passes"
   },
   {
      "test_name" : "Kubemark"
   },
   {
      "test_name" : "install_gcloud"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Deploy clustered applications [Feature:StatefulSet] [Slow] should creating a working zookeeper cluster"
   },
   {
      "test_name" : "[k8s.io] Kibana Logging Instances Is Alive [Feature:Elasticsearch] should check that the Kibana logging instance is alive"
   },
   {
      "test_name" : "[k8s.io] Reboot [Disruptive] [Feature:Reboot] each node by dropping all outbound packets for a while and ensure they function afterwards"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow][Feature:ExternalTrafficLocalOnly] should only target nodes with endpoints [Slow][Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should scale up correct target pool [Feature:ClusterSizeAutoscalingScaleUp]"
   },
   {
      "test_name" : "[k8s.io] ScheduledJob should not schedule new jobs when ForbidConcurrent [Slow]"
   },
   {
      "test_name" : "[k8s.io] PetSet [Slow] [Feature:PetSet] [k8s.io] Basic PetSet functionality should handle healthy pet restarts during scale [Feature:PetSet]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should function for pod-Service: http"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should function for endpoint-Service: udp"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/two RW PDs both mounted to one container, write to PD, verify contents, delete pod, recreate pod, verify contents, and repeat in rapid succession [Slow]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should function for node-Service: http"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/ a readonly PD on two hosts, then remove both ungracefully. [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl run default should create an rc or deployment from an image [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl create quota should create a quota with scopes"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow] should work for type=LoadBalancer"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner Default should create and delete default persistent volumes [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Restart [Disruptive] should restart all nodes and ensure all nodes and pods recover"
   },
   {
      "test_name" : "[k8s.io] Nodes [Disruptive] [k8s.io] Network when a node becomes unreachable [replication controller] recreates pods scheduled on the unreachable node AND allows scheduling of pods on a node after it rejoins the cluster"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that NodeAffinity is respected if not matching"
   },
   {
      "test_name" : "[k8s.io] Namespaces [Serial] should ensure that all pods are removed when a namespace is deleted."
   },
   {
      "test_name" : "[k8s.io] Nodes [Disruptive] [k8s.io] Network when a node becomes unreachable All pods on the unreachable node should be marked as NotReady upon the node turn NotReady AND all pods should be mark back to Ready when the node get back to Ready before pod eviction timeout"
   },
   {
      "test_name" : "[k8s.io] Services should work after restarting apiserver [Disruptive]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap updates should be reflected in volume [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0644,tmpfs) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ServiceAccounts should mount an API token into pods [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume with mappings and Item Mode set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should update annotations on modification [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy logs on node with explicit kubelet port [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Job should fail a job"
   },
   {
      "test_name" : "[k8s.io] Pods should invoke init containers on a RestartNever pod"
   },
   {
      "test_name" : "[k8s.io] Job should run a job to completion when tasks sometimes fail and are not locally restarted"
   },
   {
      "test_name" : "[k8s.io] hostPath should support subPath [Conformance]"
   },
   {
      "test_name" : "[k8s.io] kubelet [k8s.io] Clean up pods on node kubelet should be able to delete 10 pods per node in 1m0s."
   },
   {
      "test_name" : "[k8s.io] V1Job should fail a job"
   },
   {
      "test_name" : "[k8s.io] EmptyDir wrapper volumes should becomes running"
   },
   {
      "test_name" : "[k8s.io] Services should check NodePort out-of-range"
   },
   {
      "test_name" : "[k8s.io] DNS should provide DNS for pods for Hostname and Subdomain Annotation"
   },
   {
      "test_name" : "[k8s.io] Pods should be schedule with cpu and memory limits [Conformance]"
   },
   {
      "test_name" : "[k8s.io] MetricsGrabber should grab all metrics from a Kubelet."
   },
   {
      "test_name" : "[k8s.io] InitContainer should invoke init containers on a RestartNever pod"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume with Mode set in the item [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Deployment paused deployment should be able to scale"
   },
   {
      "test_name" : "[k8s.io] DisruptionController evictions: enough pods, replicaSet, percentage => should allow an eviction"
   },
   {
      "test_name" : "[k8s.io] DNS config map should be able to change configuration"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality should allow template updates"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality should provide basic identity"
   },
   {
      "test_name" : "[k8s.io] Cluster level logging using GCL should check that logs from containers are ingested in GCL"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide podname only [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on 0.0.0.0 [k8s.io] that expects no client request should support a client that connects, sends data, and disconnects"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide node allocatable (cpu) as default cpu limit if the limit is not set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on 0.0.0.0 [k8s.io] that expects a client request should support a client that connects, sends data, and disconnects"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] [ReplicationController] should eagerly create replacement pod during network partition when termination grace is non-zero"
   },
   {
      "test_name" : "[k8s.io] Logging soak [Performance] [Slow] [Disruptive] should survive logging 1KB every 1s seconds, for a duration of 2m0s, scaling up to 1 pods per node"
   },
   {
      "test_name" : "[k8s.io] Upgrade [Feature:Upgrade] [k8s.io] cluster upgrade should maintain a functioning cluster [Feature:ClusterUpgrade]"
   },
   {
      "test_name" : "DumpClusterLogs"
   },
   {
      "test_name" : "[k8s.io] Daemon set [Serial] Should adopt or recreate existing pods when creating a RollingUpdate DaemonSet with matching or mismatching templateGeneration"
   },
   {
      "test_name" : "[k8s.io] KubeProxy should test kube-proxy [Slow]"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:NFS[Flaky] with multiple PVs and PVCs all in same ns should create 4 PVs and 2 PVCs: test write access"
   },
   {
      "test_name" : "[k8s.io] Cluster level logging using GCL [Slow] [Flaky] should create a constant load with short-living pods and ensure logs delivery"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Downward API should create a pod that prints his name and namespace"
   },
   {
      "test_name" : "[k8s.io] Federation daemonsets [Feature:Federation] DaemonSet objects should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] with clusters DNS should be able to discover a federated service"
   },
   {
      "test_name" : "//kettle:make_db_test"
   },
   {
      "test_name" : "//prow/config:go_default_test"
   },
   {
      "test_name" : "//prow/github:go_default_test"
   },
   {
      "test_name" : "//prow/kube:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/assign:go_default_test"
   },
   {
      "test_name" : "//prow/plugins:go_default_test"
   },
   {
      "test_name" : "//velodrome/sql/testing:go_default_test"
   },
   {
      "test_name" : "//velodrome/transform:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestSingleWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/garbagecollector TestCascadingDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/garbagecollector TestStressingCascadingDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/garbagecollector TestBlockingOwnerRefDoesBlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/pods TestPodUpdateActiveDeadlineSeconds"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/quota TestQuotaLimitedResourceDenial"
   },
   {
      "test_name" : "//federation/apis/federation/validation:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/kubefed/init:go_default_test"
   },
   {
      "test_name" : "//pkg/api/v1/service:go_default_test"
   },
   {
      "test_name" : "//pkg/api/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/autoscaling/v1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/aws:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/cronjob:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/daemon:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/route:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/service:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/volume/attachdetach/reconciler:go_default_test"
   },
   {
      "test_name" : "//pkg/credentialprovider/aws:go_default_test"
   },
   {
      "test_name" : "//pkg/credentialprovider:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/sysctl:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/volumemanager:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/autoscaling/horizontalpodautoscaler:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/endpoint:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/namespace:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/deployment:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/storage/storageclass/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/selinux:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/util:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/exec:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/limitranger:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/podnodeselector:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/resourcequota:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/security/podsecuritypolicy:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/core:go_default_test"
   },
   {
      "test_name" : "[k8s.io] MirrorPod when create a mirror pod  should be recreated when mirror pod forcibly deleted [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should be able to pull image from docker hub [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when starting a container that exits should report termination message from file when pod succeeds and TerminationMessagePolicy FallbackToLogOnError is set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume as non-root with defaultMode and fsGroup set [Feature:FSGroup]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide podname as non-root with fsgroup and defaultMode [Feature:FSGroup]"
   },
   {
      "test_name" : "[k8s.io] Kubelet Cgroup Manager Pod containers On scheduling a Burstable Pod Pod containers should have been created under the Burstable cgroup"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when starting a container that exits should report termination message as empty when pod succeeds and TerminationMessagePolicy FallbackToLogOnError is set"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide podname as non-root with fsgroup [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] new files should be created with FSGroup ownership when container is root [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestTopHelp"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestCobraSubCommandMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-proxy/app Test_getProxyMode"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-proxy/app TestGetConntrackMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateMasterConfiguration"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestGetComponentBaseCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestTryLoadCertAndKeyFromDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestPathForKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/preflight TestRunChecks"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/kubeconfig TestWriteKubeconfigToDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/token TestParseTokenID"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/types TestVersionSort"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/openapi-gen/generators TestSimple"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs Test_updateMacroBlock_errors"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs Test_updateWhiteSpace"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/apis/federation/validation TestValidateClusterStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestZoneAddSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestZoneAddSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsAdditionVisible"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsRemove"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestObjectMetaAndSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/planner TestEqualWithExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/kubefed TestUnjoinFederation"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/kubefed/init TestInitFederation"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/kubefed/init TestMarshallAndMergeOverrides"
   },
   {
      "test_name" : "k8s.io/kubernetes/hack TestGetKubetest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestSysctlsFromPodAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/install TestResourceVersioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/testapi TestResourcePath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestAddToNodeAddresses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestTolerationsTolerateTaintsWithFilter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestCompatibility_v1_PodSecurityContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultProbe"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateEnvFrom"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestEndpointAddressNodeNameCanBeAnIPAddress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestEachListItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestExtractListOfInterfacePtrs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUntilMultipleConditions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/abac/v0 TestV0Conversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/authorization/validation TestValidateSelfSAR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestDefaultRequestIsNotSetForReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidatePodSecurityPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/policy/validation TestValidatePodDisruptionBudgetSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/v1alpha1 TestConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleBindingUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleZeroLengthName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleNonResourceURLNoVerbs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestReadAWSCloudConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestSubnetIDsinVPC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestBackoffNoErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestNewCloudFromYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/gce TestCreateFirewallFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/rackspace TestReadConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/rackspace TestParseMetaData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/vsphere TestZones"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller TestCreatePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller TestSortingActivePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/certificates TestHasKubeletUsages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSimpleDaemonSetUpdatesStatusAfterLaunchingPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDealsWithExistingPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestUpdateNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDaemonSetUpdatesNoTemplateChanged"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestGetPodMapForReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestUpdateReplicaSetOrphanWithNewLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeleteReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestGetNewRC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestAbsentUIDCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestUnblockOwnerReference"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace/deletion TestSyncNamespaceThatIsTerminatingNonExperimental"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestMonitorNodeStatusEvictPodsWithDisruption"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestTryOrdering"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestTryRemovingWhileTry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestTooFewReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcDisjointResourcesMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcToleranceCM"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcSuperfluousMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcMissingMetricsUnreadyNoChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcComputedToleranceAlgImplementation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUEmptyMetricsForOnePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestControllerUpdateReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestSyncReplicaSetDormancy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestOverlappingRSs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestDeletionTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestUpdateSelectorControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestUpdateSelectorControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestServiceReplenishmentUpdateFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestSyncResourceQuotaNoChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/service TestUpdateNodesInExternalLoadBalancer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlCreatesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlCreatePodExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdateReplicasConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerUpdatePodRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestGetPodsForStatefulSetAdopt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestAscendingOrdinal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/ttl TestUpdateNodeIfNeeded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_RemoveVolumeFromReportAsAttached_Positive_UnsetWithInitialSetVolumeMountedByNodePreserved"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumesForNode_Positive_NoVolumesOrNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_OneVolumeTwoNodes_TwoDevicePaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeletePod_Positive_2PodsExistNodeExistsVolumesExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/reconciler Test_Run_Positive_OneDesiredVolumeAttach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestMultiSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestProvisionSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestRecycleSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestRecycleMultiSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestKeyringHitWithUnqualifiedDockerHub"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestConfigMapGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPathHandling"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestExtractHost"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestUpdateExistingReplicationController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestValidateDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyMultipleObjectsAsFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateClusterRole"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateConfigMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteMultipleObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteMultipleResourcesWithTheSameName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestExec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestWatchOnlyList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPortForward"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestForceReplaceObjectNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetEnv"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopNodeWithLabelSelectorMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestCurrentContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetIntoNewConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestNewEmptyAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestImageLocal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestNewFactoryNoFlagBindings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestProtocolsForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestDiscoveryReplaceAliases"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestReplaceAliases"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestMultipleObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSingleItemImpliedObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestHelperCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestVisitorHttpGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestCleanupBandwidthLimits"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetIPTablesMark"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdateNewNodeOutOfDiskStatusWithTransitionFrequency"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestUpdateNodeStatusError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPortForward"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHandleNodeSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHandleMemExceeded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDeletePodDirsForDeletedPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSyncPodKillPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestUpdateWithBadCertKeyData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestNodeAllocatableWithNilHardThreshold"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewSourceApiserverInitialEmptySendsEmptyPodUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestPodUpdateAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestReadPodsFromFileExistLater"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestReadPodsFromFileChanged"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifyHostConfigWithGroups"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestUnconfinedSeccompProfileWithDockerV110"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodBadHash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetTerminationMessagePath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetUserFromImageUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetPidMode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestNewDockerVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetPodStatusNoSuchContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestPullWithJSONError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDockerKeyringLookupFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools/securitycontext TestModifyHostConfigPodSecurityContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedByMemory"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestThresholdsFirstObservedAt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestHasNodeConditions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestImageStats"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestKillPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestPruneInitContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestSyncPodWithInitContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/lifecycle TestResolvePortString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/lifecycle TestRunHandlerExec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/testing TestSelectDefaultPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestUpdatePodStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestNewExecInContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestSuccessThreshold"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestGetPodStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestLifeCycleHooks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestMakePodManifestAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestSecretStoreGetAlwaysRefresh"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestCacheInvalidation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeLogs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestAuthenticationFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerLogsWithLegacyTail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerLogsWithTailAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServePortForwardIdleTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestTerminatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/cache TestAddAndGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/csr TestRequestNodeCertificate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/queue TestGetWork"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/cache Test_AddPodToVolume_Negative_VolumeDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/reconciler Test_Run_Positive_VolumeAttachMountUnmountDetach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestWriteClientCAs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDefaultDescribers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestNewEndpointsSourceApi_UpdatesAndMultipleEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestReadLinesFromByteBuffer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestGetChainLines"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestLoadBalancer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestRangeAllocator_RandomishAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestLoadBalanceFailsWithNoEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestTCPProxyUpdatePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestProxyUpdatePublicIPs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestFilterWorks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestStickyLoadBalanceWorksWithNewServiceCalledFirst"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota/evaluator/core TestPodEvaluatorUsage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job TestJobStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap TestConfigMapStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/rest TestPodLogValidates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestIgnoreDeleteNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdCreateWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdCreateBinding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdUpdateScheduled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestUpdateServiceWithConflictingNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficAnnotationHealthCheckNodePortAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/portallocator TestSnapshot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/portallocator/controller TestRepair"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/controller/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversAPIGroupStarCoveringStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversEnumerationNotCoveringVerbStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversResourceStarCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversNonResourceURLsStarAfterPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/capabilities TestValidateDrops"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestNonRootOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestRunAsAnyGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestReconcileInterfaceExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/exec TestLookPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_SecondOpAfterFirstPanicsWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Negative_SecondOpBeforeFirstCompletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_WaitForCompletionWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/hash TestDeepHashObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestWaitFlagOld"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestWaitFlagNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/version TestSemanticVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestCalculateTimeoutForVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestMetricsDuGetCapacity"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cinder TestGetDeviceName_PersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/configmap TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestGetVolumeName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestIsReadOnly"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestProvision"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestAllocateMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestDeleterTempDir"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestPortalMounter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/nfs TestRecycler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/nfs TestPluginVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/photon_pd TestGetDeviceName_Volume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/photon_pd TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/secret TestPluginOptional"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/secret TestPluginOptionalKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestNewAtomicWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Negative_SecondSubOpBeforeFirstCompletes2"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_MountVolume_ConcurrentMountForNonAttachablePlugins"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/cmd/kube-scheduler/app TestSchedulerConfiguratorFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/antiaffinity TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/exec TestDenyExecOnPrivileged"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/gc TestGCAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestEstimationBasedOnTheSameImageSameNamespace7d"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestEstimationBasedOnTheSameImageAllNamespaces7d"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestManyContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestMergePodResourceRequirements"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/exists TestAdmissionNamespaceDoesNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestMergeVolumeMounts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmissionIgnoresDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota/apis/resourcequota/validation TestValidateConfiguration"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitHostPID"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestGetMatchingPolicies"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestIgnoresNonPodObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestIgnoresMirrorPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestAssignsDefaultServiceAccountAndRejectsMissingAPIToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestRespectsExistingMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac TestAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestCovers"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestBootstrapNamespaceRoleBindings"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestSchedulerErrorWithLongBinding"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodToleratesTaints"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithmprovider TestAlgorithmProviders"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/api/validation TestValidatePriorityWithNonZeroWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/api/validation TestValidatePriorityWithNegativeWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestGenericScheduler"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestCreateFromEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestResponsibleForPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestAlgorithmNameValidation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/plugin/pkg/client/auth/gcp TestCachedTokenSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/plugin/pkg/client/auth/oidc TestNewOIDCAuthProvider"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRESTClientRequires"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestSetsHeaders"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestTransformResponse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestTransformUnstructuredError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestBackoffLifecycle"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestConnectionResetByPeerIsRetried"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestNewWayFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_ResyncNonExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_KeyOf"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFO_requeueOnPop"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReflectorResyncChan"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReflectorResync"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReplaceCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestOldMergoLib"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestInClusterClientConfigPrecedence"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestMigratingFileLeaveExistingFileAlone"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestMultiSinkCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestEventAggregatorByReasonFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/transport TestUserAgentRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/cert TestMakeCSR"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestBackoffGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestAlwaysFake"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/testing TestFakeHandlerPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/admission TestReadAdmissionConfiguration"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestSimpleOptionsSetupRight"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestMetadata"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestConnectWithOptionsRouteParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestParentResourceIsRequired"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateDefaultsAPIVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestXGSubresource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWatchHTTPTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/filters TestConstructResponseWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestHasUID"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers/responsewriters TestAPIStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestDecoratedWatcher"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreCustomExport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestDefaultProxyTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestGenericHttpResponseChecker"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestInstallAPIGroups"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/filters TestMaxInFlightMutating"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/healthz TestMulitipleChecks"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/httplog TestLoggedStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/storage TestConfigurableStorageFactory"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestSelectionPredicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestGuaranteedUpdateKeyNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd/util TestGetEtcdVersion_NotListening"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestGuaranteedUpdateWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestTransformationFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/proxy TestDialURL"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook TestWebhookTokenAuthenticator"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperKindsFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperResourceSingularizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperRESTMappingSelectsVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestNegativeScaleInt64"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityNeg"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestMilliNewSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestUninitializedNoCrash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateFinalizersUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_DeepCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_MapElemAddr"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestSetString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestSetIsEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestLexer"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestNestedObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestDeepCopyOfRuntimeObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/schema TestKindForGroupVersionKinds"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer TestConvertTypesWhenDefaultNamesMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/json TestSimpleMetaFactoryInterpret"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/errors TestFlatten"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/framer TestRead"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/httpstream TestHandshake"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/intstr TestIntOrStringUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/json TestEvaluateTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/jsonmergepatch TestKeepOrDeleteNullInObj"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestTLSClientConfigHolder"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestIsInterfaceUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/rand TestRangePanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringSetEquals"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsCIdentifier"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsValidUserId"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsValidPortName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation/field TestMakeFuncs"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestDecodeBrokenYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestDecodeBrokenJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestBroadcasterDropIfChannelFull"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestRaceFreeFake"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/third_party/forked/golang/reflect TestDerivates"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/sample-apiserver/pkg/apiserver TestRoundTripTypes"
   },
   {
      "test_name" : "[k8s.io] Restart [Serial] [Slow] [Disruptive] Docker Daemon Network should recover from ip leak"
   },
   {
      "test_name" : "[k8s.io] Federation events [Feature:Federation] Event objects [NoCluster] should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] [Feature:Federation] Federation API server authentication [NoCluster] should accept cluster resources when the client has HTTP Basic authentication credentials"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestNamespaceAuthorization"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAtomicPut"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestWriteTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestUnschedulableNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestMultiScheduler"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubernetes-discovery/discoverysummarizer TestRunDiscoverySummarizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestGetTestTypeWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/namer TestNameStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/types TestGetBuiltin"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestMakeUnversionedWarning"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/election TestEtcdMasterOther"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/election TestEtcdMasterNoOther"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/minion/tasks TestBadLogger"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/node Test_nodeWithUpdatedStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/offers TestOfferStorage"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestFIFO_addReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/deleter TestDeleteOne_NonexistentPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestResourceOffer_Add"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/config TestConfig_SetDefaults"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/config TestConfig_Read"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/executorinfo TestRegistryNewDup"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestRoles"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestAcceptOfferPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/resources TestResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestNamespaceContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestSetListToRuntimeObjectArray"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestScaledValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestAddSubRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource ExampleMustParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestDurationMarshalJSONUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePathSegmentName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultJobParallelismAndCompletions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/install TestResourceVersioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversNonResourceURLsStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetRetryAfter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestLegacyDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestDeleteMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestNewAlwaysAllowAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestNewAuthorizerFromAuthorizationConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestMaxInFlight"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestPatchAnonymousField"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_basic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_compressorWorks"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestGetIndexFuncValues"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToDaemonSetLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReflectorStopWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeleteCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReadsDoNotCallPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestEventAggregatorByReasonMessageFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestInvalidSegments"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestVersionedParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestTransformResponse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestNewWayFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetServerResourcesWithV1Server"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestDeleteCollection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHTTPContainerInfoGetterGetContainerInfoSuccessfully"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHorizontalPodAutoscalerCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHorizontalPodAutoscalerUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestLimitRangeWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNamespaceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeClaimStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListPodsLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodSecurityPolicyDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateStatusReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestResourceQuotaList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestCreateCleanWithPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateMissingCurrentContextConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateCleanWithCAClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateCleanCertFilesAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd Example_mergingSomeWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd Example_mergingEverythingNoConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestDefaultScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestQPSPending"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestRSManagerNotReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_MismatchedTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestDeepCopyStruct"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestFederationHeadlessService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestGenerateSSHKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/healthz TestInstallHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGetPodsTotalRequests"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestUnknownTypePrinting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintEventsResultSorted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFreeSpaceImagesAlsoDoesLookupByRepoTags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainerInfoOnNonExistContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestSelectPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestSelectVendoredPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestPluginSetupHook"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestRequestID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestStaticPodStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestLabelHas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestSelectorParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestNilMapIsValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestParserLookahead"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestToString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestSyncAPIs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller TestControllerStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/daemonset/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/daemonset/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestEtcdCreateDeploymentRollback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/experimental/controller/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreDeleteCollectionNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestDefaultProxyTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestGenericHttpResponseChecker"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/horizontalpodautoscaler/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/limitrange/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdCreateFailsWithoutNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podsecuritypolicy/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podtemplate/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryResourceLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryIPUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestSnapshotAndRestore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestContiguousAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator/etcd TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator TestSnapshot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator/etcd TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/serviceaccount/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/serviceaccount/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestExternalToInternalMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestUnstructuredGetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer TestTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/json TestSimpleMetaFactoryInterpret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/protobuf TestRecognize"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/protobuf TestDecodeObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestModifyContainerConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestEtcdParseWatchResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestWaitUntilFreshAndList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestStartingResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestGetNotFoundErr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestDeleteWithRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestDeleteTriggerWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestBackoffHightWaterMark"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestThrottle"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/framer TestJSONFrameReaderShortBuffer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/rand TestIntn"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/rand TestIntnRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation/field TestPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestPollImmediate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestLen"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestRawConn"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStreamError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/version TestParseVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestRecyclerFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestWriteTwiceNoUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestPluginPersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestFilterStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestBroadcasterWatcherClose"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/union TestAuthenticateRequestSecondPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/webhook TestNewFromConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/webhook TestWebhook"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/client/auth/oidc TestNewOIDCAuthProvider"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestSchedulerForgetAssumedPodAfterDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/examples TestRunServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestEachListItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/filters TestAudit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/filters TestAuditNoPanicOnNilUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_requeueOnPop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestServerPreferredResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestConfigSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/authorizer TestPrivilegedGroupAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/routes TestInstallSwaggerAPI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestCustomTypePrintingWithKind"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsConfigMapKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/deepcopy-gen/generators Test_hasDeepCopyMethod"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset/planner TestEqualWithExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset/planner TestWeight"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/openapi TestBuildSwaggerSpecTwice"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata TestThirdPartyResourceDataListEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestDiscoveryRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestAuthPluginWrapTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestAbsPathJoins"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestSetsNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestCheckRetryHandles429And5xx"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestTTLPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFO_addReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToReplicationControllerLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReflectorWatchHandlerError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestMergeContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestCreateCleanDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestCreateMissingContextNoDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestCreateMissingContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateCertDataOverridesFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api TestFlattenSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestEventAggregatorByReasonFunc"
   },
   {
      "test_name" : "[k8s.io] HA-master [Feature:HAMaster] survive addition/removal replicas same zone [Serial][Disruptive]"
   },
   {
      "test_name" : "[k8s.io] HA-master [Feature:HAMaster] survive addition/removal replicas different zones [Serial][Disruptive]"
   },
   {
      "test_name" : "//federation/pkg/dnsprovider/providers/aws/route53:go_default_test"
   },
   {
      "test_name" : "//pkg/proxy/util:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/allocator:go_default_test"
   },
   {
      "test_name" : "//pkg/util/env:go_default_test"
   },
   {
      "test_name" : "//pkg/util/iptables:go_default_test"
   },
   {
      "test_name" : "//pkg/util/mount:go_default_test"
   },
   {
      "test_name" : "//third_party/forked/golang/reflect:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master/thirdparty TestEnqueue"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a batch of pods latency/resource should be within limit when create 35 pods with 100ms interval [Benchmark]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestString"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/initialresources TestGCMReturnsErrorIfClientCannotConnect"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestGetUnavailableNumbers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestBack2BackSync"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] Federated Ingresses pinky Ingress connectivity and DNS should be able to connect to a federated ingress via its load balancer"
   },
   {
      "test_name" : "[k8s.io] Deployment test Deployment pods orphaning and adoption regarding controllerRef"
   },
   {
      "test_name" : "[k8s.io] Opaque resources should schedule pods that do consume opaque integer resources."
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/tolerations TestVerifyAgainstWhitelist"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/node TestEstablishMasterConnectionWithMultipleEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestAdmitConflictEnv"
   },
   {
      "test_name" : "//pkg/proxy/config:go_default_xtest"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationCRUD/daemonset"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestNeedsHealthCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestShouldRotate/nearly_there"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestShouldRotate/already_expired"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestLess"
   },
   {
      "test_name" : "Extract"
   },
   {
      "test_name" : "Deferred TearDown"
   },
   {
      "test_name" : "[k8s.io] Empty [Feature:Empty] starts a pod"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Pods should function for node-pod communication: http [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Loadbalancing: L7 [Feature:Ingress] [k8s.io] Nginx [Slow] should conform to Ingress spec"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow][Feature:ExternalTrafficLocalOnly] should handle updates to source ip annotation [Slow][Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] ScheduledJob should replace jobs when ReplaceConcurrent"
   },
   {
      "test_name" : "[k8s.io] ScheduledJob should schedule multiple jobs concurrently"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/ a RW PD shared between multiple containers, write to PD, delete pod, verify contents, and repeat in rapid succession [Slow]"
   },
   {
      "test_name" : "[k8s.io] CronJob should not schedule new jobs when ForbidConcurrent [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Simple pod should support port-forward"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Simple pod should return command exit codes"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl logs should be able to retrieve and filter logs [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl expose should create services for rc [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl apply should reuse nodePort when apply to an existing SVC"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should schedule a pod w/ a RW PD, ungracefully remove it, then schedule it on another host [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Kubectl alpha client [k8s.io] Kubectl run CronJob should create a CronJob"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl taint [Serial] should remove all the taints with the same key off a node"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that InterPodAntiAffinity is respected if matching 2"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] [Serial] [Slow] Deployment Should scale from 5 pods to 3 pods and from 3 to 1"
   },
   {
      "test_name" : "[k8s.io] Namespaces [Serial] should ensure that all services are removed when a namespace is deleted."
   },
   {
      "test_name" : "[k8s.io] DaemonRestart [Disruptive] Controller Manager should not create/delete replicas across restart"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that taints-tolerations is respected if matching"
   },
   {
      "test_name" : "[k8s.io] Pods should be submitted and removed [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Services should serve multiport endpoints from pods [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API should provide pod IP as an env var [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes volume on default medium should have the correct mode [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pods should be updated [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with defaultMode set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Docker Containers should use the image defaults if command and args are blank [Conformance]"
   },
   {
      "test_name" : "[k8s.io] KubeletManagedEtcHosts should test kubelet managed /etc/hosts file [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume with defaultMode set [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Deployment deployment should label adopted RSs and pods"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks should function for pod communication on a single node"
   },
   {
      "test_name" : "[k8s.io] hostPath should give a volume the correct mode [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Deployment deployment should support rollback"
   },
   {
      "test_name" : "[k8s.io] Downward API should provide container's limits.cpu/memory and requests.cpu/memory as env vars"
   },
   {
      "test_name" : "[k8s.io] V1Job should delete a job"
   },
   {
      "test_name" : "[k8s.io] ReplicaSet should serve a basic image on each replica with a private image"
   },
   {
      "test_name" : "[k8s.io] Pods should not start app containers if init containers fail on a RestartAlways pod"
   },
   {
      "test_name" : "[k8s.io] V1Job should run a job to completion when tasks sometimes fail and are not locally restarted"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a configMap."
   },
   {
      "test_name" : "[k8s.io] Deployment deployment should support rollover"
   },
   {
      "test_name" : "[k8s.io] Networking should check kube-proxy urls"
   },
   {
      "test_name" : "[k8s.io] DisruptionController evictions: too few pods, absolute => should not allow an eviction"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy to cadvisor"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server listening on 0.0.0.0 [k8s.io] that expects a client request should support a client that connects, sends no data, and disconnects"
   },
   {
      "test_name" : "[k8s.io] DNS configMap federations should be able to change federation configuration"
   },
   {
      "test_name" : "[k8s.io] Projected should provide container's memory request [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should provide container's cpu request [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0777,default) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should update annotations on modification [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a persistent volume claim. [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should set mode on item file [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume with defaultMode set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Pods Extended [k8s.io] Pods Set QOS Class should be submitted and removed [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Projected should provide container's memory limit [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume with mappings and Item Mode set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should set DefaultMode on files [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] GCP Volumes [k8s.io] NFSv3 should be mountable for NFSv3 [Volume]"
   },
   {
      "test_name" : "[k8s.io] GCP Volumes [k8s.io] NFSv4 should be mountable for NFSv4 [Volume]"
   },
   {
      "test_name" : "Publish version"
   },
   {
      "test_name" : "[k8s.io] EmptyDir wrapper volumes should not cause race condition when used for git_repo [Serial] [Slow]"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] [StatefulSet] should not reschedule stateful pods if there is a network partition [Slow] [Disruptive]"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Serial] [k8s.io] PersistentVolumes:GCEPD should test that deleting a PVC before the pod does not cause pod deletion to fail on PD detach"
   },
   {
      "test_name" : "Deferred Federation TearDown"
   },
   {
      "test_name" : "[k8s.io] Pods Extended [k8s.io] Delete Grace Period should be submitted and removed [Conformance] [Flaky]"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Cassandra should create and scale cassandra"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] CassandraStatefulSet should create statefulset"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] Federated Ingresses should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Federation daemonsets [Feature:Federation] DaemonSet objects should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Federation replicasets [Feature:Federation] Federated ReplicaSet should not be deleted from underlying clusters when OrphanDependents is true"
   },
   {
      "test_name" : "[k8s.io] Federation secrets [Feature:Federation] Secret objects should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] Federation namespace [Feature:Federation] Namespace objects should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] Garbage collector [Feature:GarbageCollector] should not delete dependents that have both valid owner and owner that's waiting for dependents to be deleted"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a batch of pods latency/resource should be within limit when create 105 pods with 0s interval [Benchmark]"
   },
   {
      "test_name" : "[k8s.io] Resource-usage [Serial] [Slow] regular resource usage tracking resource tracking for 0 pods per node [Benchmark]"
   },
   {
      "test_name" : "//kettle:make_json_test"
   },
   {
      "test_name" : "//mungegithub/features:go_default_test"
   },
   {
      "test_name" : "//prow/cmd/deck:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/releasenote:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/yuks:go_default_test"
   },
   {
      "test_name" : "//verify:verify-boilerplate"
   },
   {
      "test_name" : "//verify:verify-govet"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestNamespaceAuthorization"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestKindAuthorization"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestAtomicPut"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/objectmeta TestIgnoreClusterName"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/serviceaccount TestServiceAccountAutoCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/serviceaccount TestServiceAccountTokenAutoMount"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/serviceaccount TestServiceAccountTokenAuthentication"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeMultiPVsDiffAccessModes"
   },
   {
      "test_name" : "//cmd/kubeadm/app/cmd:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/images:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/phases/addons:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/util/token:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/dnsprovider/providers/google/clouddns:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/util:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/batch/v1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/apis/componentconfig:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/extensions/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/rbac/v1alpha1:go_default_xtest"
   },
   {
      "test_name" : "//pkg/apis/storage/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/client/tests:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/cloud:go_default_test"
   },
   {
      "test_name" : "//pkg/credentialprovider/gcp:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/server/streaming:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/types:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/util/format:go_default_test"
   },
   {
      "test_name" : "//pkg/quota/evaluator/core:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/configmap:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/limitrange:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/pod/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/ipallocator:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/daemonset:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/capabilities:go_default_test"
   },
   {
      "test_name" : "//pkg/securitycontext:go_default_test"
   },
   {
      "test_name" : "//pkg/util/labels:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/aws_ebs:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/cephfs:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/configmap:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/namespace/exists:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Kubelet Volume Manager Volume Manager On terminatation of pod with memory backed volume should remove the volume from the node"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] new files should be created with FSGroup ownership when container is root"
   },
   {
      "test_name" : "[k8s.io] AppArmor [Feature:AppArmor] when running with AppArmor should reject an unloaded profile"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume with mappings as non-root with FSGroup [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestCobraCommandHelp"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestCobraCommandDefaultMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestCobraCommandMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-proxy/app TestProxyServerWithCleanupAndExit"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateIPFromString"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/token TestRandBytes"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/openapi-gen/generators TestFailingSample2"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/openapi-gen/generators TestPointer"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs Test_syncExamples"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestPreformattedImbalance"
   },
   {
      "test_name" : "k8s.io/kubernetes/examples TestReadme"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsAdditionVisible"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsRemoveGone"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestZonesList"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/kubefed/init TestCertsTLS"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestSemantic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestTaintToString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestIsPodAvailable"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestDeepCopySingleType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestEncodePtr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/endpoints TestPackSubsets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/install TestUnversioned"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/pod TestPodSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/testapi TestV1EncodeDecodeStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestRemoveDuplicateAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSysctlsFromPodAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultSecretVolumeSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaulEndpointsProtocol"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestLoad"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateOk"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestVersionRegex"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateEnv"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePodSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateReplicationControllerStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateResourceNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateLimitRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateConfigMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestEndpointAddressNodeNameUpdateRestrictions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestIsList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestSetListToRuntimeObjectArray"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestResourceVersionerOfAPI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestRecognize"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUntilMultipleConditionsFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/apps/validation TestValidateStatefulSetUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions TestSysctlsFromPodSecurityPolicyAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateDaemonSetUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateIngressTLS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateReplicaSetStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateReplicaSetUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authorizer/abac TestTwoLineFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/tests TestFakeClientSetFiltering"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/tests TestFakeClientsetInheritsNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/tests TestListWatchesCanWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestSetsCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/remotecommand TestV2CreateStreams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/remotecommand TestV4ErrorDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestNodeAddresses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestDescribeLoadBalancerOnUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestBackoffHitsMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileLoadBalancerRemovesPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestProtocolTranslationTCP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestFilterNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_Zones"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/bootstrap TestNoConfigMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestNoNodesDoesNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestDaemonSetUpdatesPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestSyncDeploymentCreatesReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestPodDeletionEnqueuesRecreateDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeploymentController_scaleDownOldReplicaSetsForRollingUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeploymentController_cleanupDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestDeploymentTimedOut"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/endpoint TestSyncEndpointsItemsEmptySelectorSelectsAllNotReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestWatchJobs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestWatchPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace/deletion TestSyncNamespaceThatIsActive"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestTry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestUpdateNodeWithMultiplePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestExecuteDelayed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpUnreadyNoScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUpReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleDownCM"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleDownIgnoresUnreadyPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestToleranceCMObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestSuperfluousMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestEmptyCPURequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcEmptyCPURequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestQpsMissingMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestSyncReplicaSetDoesNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestSyncReplicaSetCreates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestPatchPodFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestUpdateLabelsRemoveControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestAvailableReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestDeleteFinalStateUnknown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestPodControllerLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestControllerBurstReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestSyncResourceQuotaSpecChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/service TestGetNodeConditionPredicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdateIdentityFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestIsMemberOf"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestUpdateIdentity"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestIsRunningAndReady"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/ttl TestDesiredTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_VolumeNodeExists_Positive_VolumeAndNodeDontExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumes_Positive_TwoVolumeTwoNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_SetDetachRequestTime_Positive"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddNode_Positive_NewNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_AddNode_Positive_ExistingNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeletePod_Positive_PodExistsNodeExistsVolumeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestMatchingWithBoundVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestControllerCacheParsingError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/azure Test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestDockerKeyringFromGoogleDockerConfigMetadata"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestClusterGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestParseFileSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestUpdate_progressTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestUpdate_assignOriginalAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestRollingUpdater_multipleContainersInPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestRollingUpdater_cleanupWithClients_Rename"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestFindSourceController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestGenerateDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestJobScaleRetry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestValidateJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyExtraArgsFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestNormalizationFuncGlobalExistence"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteMultipleSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestRunExposeService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetSchemaObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestWatchResourceIdentifiedByFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestParseLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestValidateLogFlags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPatchNoop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPatchObjectFromFileOutput"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopNodeWithNameMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printServiceWithNamespacesAndLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetCurrentContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestUnsetBytes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestEmbedNoCADisallowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestDeleteCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetContextsAllNoHeader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestParseWithDots"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestPrintObjectSpecificMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestMakePortsString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestMerge"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestPathBuilderAndVersionedObjectNotDefaulted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestPathBuilderWithMultipleInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestHelperList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestActiveDeadlineHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHasDedicatedImageFs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGenerateRunContainerOptions_DNSConfigurationParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestMakeEnvironmentVariables"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetHostPortConflicts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSyncLoopTimeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPrivilegedContainerDisallowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetPodsToSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetPodsToSyncInvokesPodSyncLoopHandlers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestRunOnce"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/client TestMakeTransportValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestNodeAllocatableInputValidation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestMakePortMappings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestMapState"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodDeletesDuplicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestPruneInitContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetContainerID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestMatchImageIDOnly"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestDetectImagesWithRemovedImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestFreeSpaceImagesInUseContainersAreIgnored"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestNewKubeRuntimeManager"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestContainerRuntimeType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestGetPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/lifecycle TestResolvePortInt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/preemption TestAdmissionRequirementsDistance"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestGetURLParts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestDoProbe"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestConstructSyslogIdentifier"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerLogsWithTail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerLogsWithFollow"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeExecInContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeWSPortForward"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/streaming TestServePortForward"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestNewStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestStaticPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestGetValidatedSources"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/cache TestExpirationBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager TestGetMountedVolumesForPodAndGetVolumesInUse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager TestGetExtraSupplementalGroupsForPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestAPIVersionOfDiscoveryEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers TestMassageJSONPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestVersionedPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestJSONPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestInitialSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestRevertPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestHasJump"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestUDPProxyTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestProxyUpdatePortal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestStickyLoadBalanceWorksWithNewServiceCalledFirst"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestStickyLoadBalanceWorksWithMultipleEndpointsAndUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestMultiPortOnServiceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestPackUnpackDnsMsgUnqualifiedName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestPackUnpackDnsMsgEmptyName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestStickyLoadBalanceWorksWithMultipleEndpointsAndUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestStickyLoadBalanceWorksWithServiceRemoval"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota/evaluator/core TestPersistentVolumeClaimEvaluatorUsage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota/evaluator/core TestServiceConstraintsFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/componentstatus TestGet_BadName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod TestGetPodQOS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller TestControllerStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryUpdateMultiPortExternalService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryResourceLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator TestAllocateTiny"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/storage TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/portallocator TestNewFromSnapshot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/ingress/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset TestReplicaSetStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata TestEncodeToStreamForInternalEvent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/reconciliation TestDiffObjectReferenceLists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversExactMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversSingleAPIGroupsCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversNonResourceURLsStarAfterPrefixDoesntCover"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestCreatePodSecurityContextNonmutating"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/apparmor TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/capabilities TestValidateAdds"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestNonRootGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestHasRunAsUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/ssh TestSSHTunnelListUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestReconcileInterfaceIsWrong"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/env TestGetEnvAsFloat64OrFallback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_SingleOpWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_WaitEmptyWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/i18n TestTranslationEnUSEnv"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/ipconfig TestGetDnsSuffixSearchList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestRestoreAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/labels TestAddLabelToSelector"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net/sets TestIPNets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net/sets TestIPNetSetDifference"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net/sets TestIPNetSetList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/slice TestShuffleStrings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings TestEscapeQualifiedNameForDisk"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/threading TestDeadlockWatchdogLocked"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/version TestBadGenericVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestMetricsNilGetCapacity"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestMetricsDuRequirePath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_dd TestIoHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/empty_dir TestPluginBackCompat"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/fc TestIoHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestMountDevice"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestSetUpAt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestFlockerUtil_CreateVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestNewFree"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestExtractIface"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/rbd TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestMgrGetClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestUtilDefaultString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestUtilAttachSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestUtilLoadConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/secret TestMakePayload"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/secret TestPluginReboot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestPathsToRemove"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_VerifyControllerAttachedVolumeConcurrently"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/vsphere_volume TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/antiaffinity TestOtherResources"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/imagepolicy TestDefaultAllow"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestPodLimitFuncApplyDefault"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/autoprovision TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/autoprovision TestAdmissionWithLatentCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/exists TestAdmissionNamespaceExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podnodeselector TestPodAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitBestEffortQuotaLimitIgnoresBurstable"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitWhenUnrelatedResourceExceedsQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitAppArmor"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitSupplementalGroups"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestAllowsReferencedSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestBootstrapNamespaceRoles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac/bootstrappolicy TestBootstrapControllerRoleBindings"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestGetUsedPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestInterPodAffinityPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestZeroRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/schedulercache TestUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestSetKubernetesDefaultsUserAgent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestOrdersSubResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestTransformResponseNegotiate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestCheckRetryHandles429And5xx"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestWasCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_HasSynced"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeleteCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestBasicAuthData"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestLoadingEmptyMaps"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateCleanClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateMultipleMethodsAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestLotsOfEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestEventCorrelator"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestIsInBackOffSinceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestBasicThrottle"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestIncrementThrottle"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/flowcontrol TestNeverFake"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/testing TestFakeHandlerPathNoBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/anonymous TestAnonymous"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/union TestAuthenticateRequestSecondPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/union TestAuthenticateRequestFirstPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/union TestAuthenticateRequestNonePass"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetRetryAfter"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestConnectResponderObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWriteRAWJSONMarshalError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWatchParamParsing"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/openapi TestGetDefinitionName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/request TestUIDContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreDeleteCollectionWithWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/rest TestHasObjectMetaSystemFieldValues"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/options TestGetNamedCertificateMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestEtcdParseWatchResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestHasPathPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestGuaranteedUpdate_CreateCollision"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestWatchInterpretations"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd/util TestIsEtcdNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestCompactConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatchFromNoneZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestStartingResourceVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/cache TestExpiredGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestBase64Conn"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authorizer/webhook TestWebhook"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestInt64AsCanonicalString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestDetectOverflowAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityParseEmit"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestNewScaledSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQFlagSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestScaledValueInternal"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateObjectMetaTrimsTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apimachinery/announced TestFactoryRegistry"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_DefaultConvert"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion/queryparams TestConvert"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestSplitTerms"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestEverything"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestLabelSelectorParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestConflictingAddKnownTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestGetRoutes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/runtime TestHandleCrash"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/strategicpatch TestUnknownField"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsValidIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsConfigMapKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation/field TestPathMultiArg"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestPollUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestDecodeYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/third_party/forked/golang/reflect TestEqualities"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/kube-aggregator/pkg/apiserver TestAPIGroup"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdJoinConfig"
   },
   {
      "test_name" : "[k8s.io] AllocatableEviction [Slow] [Serial] [Disruptive] [Flaky] when we run containers that should cause Memory Pressure should eventually see Memory Pressure, and then evict all of the correct pods"
   },
   {
      "test_name" : "[k8s.io] Federation apiserver [Feature:Federation] Cluster objects [Serial] should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should be able to pull image from docker hub"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should not be able to pull non-existing image from gcr.io"
   },
   {
      "test_name" : "[k8s.io] DynamicKubeletConfiguration [Feature:DynamicKubeletConfig] [Serial] [Disruptive] When a configmap called `kubelet-{node-name}` is added to the `kube-system` namespace The Kubelet on that node should restart to take up the new config"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] with clusters DNS non-local federated service [Slow] missing local service should never find DNS entries for a missing local service"
   },
   {
      "test_name" : "[k8s.io] Federation apiserver [Feature:Federation] Admission control [NoCluster] should not be able to create resources if namespace does not exist"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAuthModeAlwaysAllow"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestBobIsForbidden"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestUnknownUserIsUnauthorized"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestWebhookTokenAuthenticator"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestMultiWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeMultiPVsPVCs"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/types TestFlatten"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestServerHelp"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorRegister"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/node TestRegister_withKnownNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_multiAction"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_goodLifecycle"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/runtime Test_LatchAcquireConcurrent"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestNoPortsInPodOrOffer"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestNewPodResourcesProcurement"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestExtractListGeneric"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestExtractListGenericV1"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestResourceVersionerOfAPI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestDetectOverflowAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestNegativeScaleInt64"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestDec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityRoundUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestJSONWhitespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestSub"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestGroupVersionUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestTimeProto"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestTypeOAny"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/componentconfig/install TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/install TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversMultipleRulesCoveringSingleRule"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversResourceStarCoveringStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestDefaultRuleResolver"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestSimpleSetupRight"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestSimpleOptionsSetupRight"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestLegacyDeleteIgnoresOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestDeleteInvokesAdmissionControl"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateAllowsMismatchedNamespaceOnError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateREST"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateInNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestXGSubresource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetNonAPIRequestInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestPatchResourceWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWatchHTTPTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFO_detectLineJumpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestFIFO_addIfNotPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToNodeConditionLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestListWatchesCanWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestCloseWatchChannelOnError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReflectorWatchHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestUndeltaStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestAuthPluginWrapTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestAuthPluginPersist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestNewWayObj"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestWasCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestUintParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/transport TestTLSConfigKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/transport TestUserAgentRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/dynamic TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHTTPContainerInfoGetterGetContainerInfoWithError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHTTPGetMachineInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestLimitRangeCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNamespaceGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestNamespaceFinalize"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListNodesLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeClaimList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeClaimWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetPodWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodSecurityPolicyUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodSecurityPolicyWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetReplicaSetWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestResourceQuotaCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestInsecureOverridesCA"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestErrorReadingFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api TestFlattenSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetQueueCreates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetSetControllerBlocksScaling"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUPending"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUAllPending"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUSuperfluousMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestAggregateSumSingle"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_RemoveVolumeFromReportAsAttached_AddVolumeToReportAsAttached_Negative"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_MapElemAddr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestPodDns"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestUnnamedSinglePortService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestSkyNamedPortSRVLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestFederationService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestNilMapIsValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestSecondsSinceSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestMassageJSONPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribeContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestCustomTypePrinting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintHunmanReadableIngressWithColumnLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestExecInContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestSerializedPuller"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network TestSelectDefaultPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestGetStreamPair"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestExecConntrackTool"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/endpoint/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreCustomExport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestInputStreamNullLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/horizontalpodautoscaler TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/horizontalpodautoscaler/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/horizontalpodautoscaler/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/job TestJobStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/limitrange TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/networkpolicy/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestResourceLocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset TestReplicaSetStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset TestReplicaSetStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryExternalService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryIPAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestAllocate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestAllocateMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/allocator TestRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator TestAllocateSmall"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestUnversionedTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestUnstructuredSetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer TestBadJSONRejection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/streaming TestEmptyDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestModifyHostConfigPodSecurityContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestModifySecurityOption"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/serviceaccount TestReadPublicKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd/util TestGetEtcdVersion_ErrorStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd/util TestGetEtcdVersion_NotListening"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestCompact"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestGetToList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestGuaranteedUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestGuaranteedUpdateWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchDeleteEventObjectHaveLatestRV"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/deployment TestEqualIgnoreHash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flushwriter TestWriteWithoutFlush"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/framer TestRead"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/framer TestJSONFrameReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/httpstream/spdy TestConnectionCloseIsImmediateThroughAProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/intstr TestFromString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/jsonpath TestKubernetes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestGetRoutes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsValidPortName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation/field TestToAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestExponentialBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestPoll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestPollError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStreamBase64"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestDecodeYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestPluginVolumeMounter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestNewMounter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestNewUnmounter"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/union TestAuthenticateRequestAdditiveErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/oidc TestOIDCDiscoveryNoKeyEndpoint"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/tokenfile TestTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/webhook TestTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestSelectHost"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler TestGenericScheduler"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestSoftPodAntiAffinityWithFailureDomains"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeMultiPVs"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeControllerStartup"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeProvisionMultiPVCs"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestMakeClientConfigWithCerts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/admission TestWantsAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestListTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestValidateListType"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultHorizontalPodAutoscalerMinReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetPretty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestPopReleaseLock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/testing/core TestFakeClientSetFiltering"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetIteratorRelist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns/federation TestParseFederationsFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns/treecache TestTreeCacheSerialize"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestIsTunnelSyncHealthy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/mux TestNewAPIContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/mux TestSecretHandlers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopPodAllNamespacesMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopPodWithContainersMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestIsImagePresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestGenerationNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdCreateWithContainersNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/policy/poddisruptionbudget/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestConvertToVersionBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestSelectionPredicate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsValidPercent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestJitterUntilRecoversPanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestReinsert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestReadRandomLineLengths"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/examples TestRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/deepcopy-gen/generators Test_isRootedUnder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/certificates/install TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestOrdersNamespaceInPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestStoreToReplicaSetLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReadsDoNotCallPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestToleratingMissingFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestMigratingFileLeaveExistingFileAlone"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestMigratingFileSourceMissingSkip"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestInClusterConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateCleanClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestEventf"
   },
   {
      "test_name" : "[k8s.io] Kubelet [Serial] [Slow] [k8s.io] regular resource usage tracking resource tracking for 35 pods per node"
   },
   {
      "test_name" : "//pkg/api/util:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/util/queue:go_default_test"
   },
   {
      "test_name" : "//pkg/util/i18n:go_default_test"
   },
   {
      "test_name" : "//pkg/util/procfs:go_default_test"
   },
   {
      "test_name" : "//pkg/util/strings:go_default_test"
   },
   {
      "test_name" : "//third_party/forked/etcd221/pkg/fileutil:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Density [Feature:Performance] should allow starting 30 pods per node"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerDeletionTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerDeletionTimestampRace"
   },
   {
      "test_name" : "//bookos:go_default_test"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes:GCEPD [Volume] should test that deleting a PVC before the pod does not cause pod deletion to fail on PD detach"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes:GCEPD [Volume] should test that deleting the PV before the pod does not cause pod deletion to fail on PD detach"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdJoinBadArgs"
   },
   {
      "test_name" : "[k8s.io] Dynamic Provisioning [k8s.io] DynamicProvisioner Beta should test that deleting a claim before the volume is provisioned deletes the volume. [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestValidateZone"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestGetPVCMatchLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestVolumeZoneConfBothZoneAndZonesAreConfigured"
   },
   {
      "test_name" : "[k8s.io] Generated release_1_5 clientset should create configmaps, delete configmaps, watch configmaps"
   },
   {
      "test_name" : "//prow/plank:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestRotateCertWaitingForResultError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestUpdateSymlinkExistingFileError"
   },
   {
      "test_name" : "//pkg/credentialprovider/rancher:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestAddPolicyRuleForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestRemovePolicyRuleForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestIPLimitIncrementFailOnIPLimit"
   },
   {
      "test_name" : "[k8s.io] Projected configmaps should be consumable from pods in volume with defaultMode set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Opaque resources should account opaque integer resources in pods with multiple containers."
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaults_Affinity"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultReplicationControllerInitContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/discovery TestNewDiscoveryValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/exec TestDenyStaticPodExec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/configmap TestCacheInvalidation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestRequestsOnlyLocalTraffic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestDefaultExternalTrafficPolicyIfNeeded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestSetServiceHealthCheckNodePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateServiceExternalTrafficFieldsBeforeAction"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficDefaultGlobal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficClusterIP"
   },
   {
      "test_name" : "[k8s.io] Kubelet Container Manager [Serial] Validate OOM score adjustments once the node is setup  pod infra containers oom-score-adj should be -998 and best effort container's should be 1000"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestSwap"
   },
   {
      "test_name" : "IsUp"
   },
   {
      "test_name" : "UpgradeTest"
   },
   {
      "test_name" : "[k8s.io] etcd uUpgrade [Feature:EtcdUpgrade] [k8s.io] etcd upgrade should maintain a functioning cluster"
   },
   {
      "test_name" : "[k8s.io] ESIPP [Slow][Feature:ExternalTrafficLocalOnly] should work from pods [Slow][Feature:ExternalTrafficLocalOnly]"
   },
   {
      "test_name" : "[k8s.io] Services should be able to change the type and ports of a service [Slow]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl cluster-info should check if Kubernetes master services is included in cluster-info [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl version should check is all data is printed [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl create quota should reject quota with invalid scopes"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl run job should create a job from an image when restart is OnFailure [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Proxy server should support --unix-socket=/path [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pod Disks Should schedule a pod w/ a RW PD, gracefully remove it, then schedule it on another host [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that embedding the JSON PodAffinity and PodAntiAffinity setting as a string in the annotation value work"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that InterPod Affinity and AntiAffinity is respected if matching"
   },
   {
      "test_name" : "[k8s.io] Namespaces [Serial] should delete fast enough (90 percent of 100 namespaces in 150 seconds)"
   },
   {
      "test_name" : "[k8s.io] SchedulerPredicates [Serial] validates that Inter-pod-Affinity is respected if not matching"
   },
   {
      "test_name" : "[k8s.io] DaemonRestart [Disruptive] Kubelet should not restart containers across restart"
   },
   {
      "test_name" : "[k8s.io] Downward API should provide container's limits.cpu/memory and requests.cpu/memory as env vars [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ReplicationController should serve a basic image on each replica with a public image [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0666,tmpfs) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ReplicaSet should serve a basic image on each replica with a public image [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0777,tmpfs) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Docker Containers should be able to override the image's default commmand (docker entrypoint) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Docker Containers should be able to override the image's default command and arguments [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0666,default) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pods should *not* be restarted with a docker exec \"cat /tmp/health\" liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] V1Job should run a job to completion when tasks succeed"
   },
   {
      "test_name" : "[k8s.io] ReplicationController should serve a basic image on each replica with a private image"
   },
   {
      "test_name" : "[k8s.io] ServiceAccounts should ensure a single API token exists"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] ReplicationController light Should scale from 1 pod to 2 pods"
   },
   {
      "test_name" : "[k8s.io] Pods should *not* be restarted with a /healthz http liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a persistent volume claim."
   },
   {
      "test_name" : "[k8s.io] Generated release_1_3 clientset should create pods, delete pods, watch pods"
   },
   {
      "test_name" : "[k8s.io] Sysctls should reject invalid sysctls"
   },
   {
      "test_name" : "[k8s.io] InitContainer should not start app containers and fail the pod if init containers fail on a RestartNever pod"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide node allocatable (memory) as default memory limit if the limit is not set"
   },
   {
      "test_name" : "[k8s.io] ReplicaSet should surface a failure condition on a common issue like exceeded quota"
   },
   {
      "test_name" : "[k8s.io] Deployment lack of progress should be reported in the deployment status"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality [StatefulSetBasic] should not deadlock when a pod's predecessor fails"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should update annotations on modification [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should provide container's cpu limit [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume with mappings [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap optional updates should be reflected in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume as non-root [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes volume on default medium should have the correct mode [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable via the environment [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should set DefaultMode on files [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should provide node allocatable (memory) as default memory limit if the limit is not set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] HostPath should give a volume the correct mode [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Loadbalancing: L7 [k8s.io] Nginx should conform to Ingress spec"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] Pods should return to running and ready state after network partition is healed All pods on the unreachable node should be marked as NotReady upon the node turn NotReady AND all pods should be mark back to Ready when the node get back to Ready before pod eviction timeout"
   },
   {
      "test_name" : "[k8s.io] NoExecuteTaintManager [Serial] eventually evict pod with finite tolerations from tainted nodes"
   },
   {
      "test_name" : "[k8s.io] Pod Disks should be able to detach from a node which was deleted [Slow] [Disruptive] [Volume]"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Redis should create and stop redis servers"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] with clusters Federated Service should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Federation daemonsets [Feature:Federation] DaemonSet objects should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "[k8s.io] Federation replicasets [Feature:Federation] Federated ReplicaSet should create and update matching replicasets in underling clusters"
   },
   {
      "test_name" : "//mungegithub/mungers/testowner:go_default_test"
   },
   {
      "test_name" : "//prow/cmd/splice:go_default_test"
   },
   {
      "test_name" : "//prow/cmd/tot:go_default_test"
   },
   {
      "test_name" : "//velodrome/fetcher:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/garbagecollector TestCreateWithNonExistentOwner"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestAutoscalingGroupBackwardCompatibility"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestAppsGroupBackwardCompatibility"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicaset TestUpdateSelectorToRemoveControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicationcontroller TestUpdateSelectorToRemoveControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/replicationcontroller TestUpdateLabelToBeAdopted"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/scheduler TestUnschedulableNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeControllerStartup"
   },
   {
      "test_name" : "//cmd/hyperkube:go_default_test"
   },
   {
      "test_name" : "//cmd/kube-controller-manager/app:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/app/node:go_default_test"
   },
   {
      "test_name" : "//cmd/kubeadm/test/cmd:go_default_test"
   },
   {
      "test_name" : "//federation/cmd/federation-controller-manager/app:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/namespace:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/util/eventsink:go_default_test"
   },
   {
      "test_name" : "//pkg/api/service:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/abac/v0:go_default_xtest"
   },
   {
      "test_name" : "//pkg/apis/autoscaling/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/apis/policy/validation:go_default_test"
   },
   {
      "test_name" : "//pkg/client/listers/batch/internalversion:go_default_test"
   },
   {
      "test_name" : "//pkg/client/listers/extensions/v1beta1:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/vsphere:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/certificates:go_default_test"
   },
   {
      "test_name" : "//pkg/controller:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/node:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/replication:go_default_test"
   },
   {
      "test_name" : "//pkg/kubeapiserver:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl/cmd/auth:go_default_test"
   },
   {
      "test_name" : "//pkg/kubectl/cmd/config:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/custommetrics:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/lifecycle:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/network/hostport:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/status:go_default_test"
   },
   {
      "test_name" : "//pkg/proxy/healthcheck:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/batch/cronjob/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/certificates/certificates:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/namespace/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/node/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/pod:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/podtemplate/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/ipallocator/controller:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/ipallocator/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/controller/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/ingress:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/apparmor:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy:go_default_test"
   },
   {
      "test_name" : "//pkg/security/podsecuritypolicy/util:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/fc:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/projected:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/secret:go_default_test"
   },
   {
      "test_name" : "//plugin/cmd/kube-scheduler/app:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/imagepolicy:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/initialresources:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/podpreset:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/algorithm/priorities:go_default_test"
   },
   {
      "test_name" : "[k8s.io] MirrorPod when create a mirror pod  should be updated when static pod updated [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should be able to pull from private registry with secret [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Container Runtime Conformance Test container runtime conformance blackbox test when running a container with a new image should not be able to pull from private registry without secret [Conformance]"
   },
   {
      "test_name" : "[k8s.io] AppArmor [Feature:AppArmor] when running without AppArmor should reject a pod with an AppArmor profile"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] new files should be created with FSGroup ownership when container is non-root"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should provide podname as non-root with fsgroup [Feature:FSGroup]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume as non-root with defaultMode and fsGroup set [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected should be consumable from pods in volume as non-root with FSGroup [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/preflight TestParseServerURIBad"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/validation TestValidateIPNetFromString"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/node TestValidateAPIServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/addons TestCompileManifests"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/preflight TestConfigCertAndKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/kubeconfig TestCreateWithToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util/token TestBearerToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/openapi-gen/generators TestFailingSample1"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/apis/federation/install TestResourceVersioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/apis/federation/install TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsAddDuplicateFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/coredns TestResourceRecordSetsReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/secret TestSecretController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestAddToNodeAddresses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestDefaultResourceHelpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestCommonKindsRegistered"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestObjectWatchFraming"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestAllowAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestResourceHelpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultDownwardAPIVolumeSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultServicePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/endpoints TestPackSubsets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateDuplicateLabelsFailCases"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePersistentVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateKeyToPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateProbe"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePullPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateNamespaceStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateFlexVolumeSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestGenericTypeMeta"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestAccessOwnerReferences"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUntilErrorCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/apps/v1beta1 TestSetDefaultDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/batch/validation TestValidateJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions TestPodAnnotationsFromSysctls"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/v1beta1 TestSetDefaultDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateReplicaSetStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestIsValidSysctlPattern"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleValidRole"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleNonResourceURL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/settings/validation TestValidateEmptyPodPresetItems"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/listers/batch/internalversion TestJobLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/listers/extensions/internalversion TestDaemonSetLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/tests TestForwardPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestGetRegion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileSecurityGroupRemoveServiceRemovesPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestProtocolTranslationUDP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/gce TestScrubDNS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_readConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_MasterURI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller TestActivePodFiltering"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/cronjob TestGetRecentUnmetScheduleTimes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestOutOfDiskNodeDaemonDoesNotLaunchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestOutOfDiskNodeDaemonLaunchesCriticalPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestGetNodesToDaemonPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon/util TestIsPodUpdated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestUpdateReplicaSetChangeControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestRequeueStuckDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestNewRSNewReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment/util TestRemoveCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/disruption TestPDBNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestSyncJobPastDeadline"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestClear"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCreateNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleDownCMObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestTolerance"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestToleranceCM"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestTooManyReplicas"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleUpCMUnreadyNoScaleWouldScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleDownCM"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcScaleDownIgnoresUnreadyPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcMissingMetricsNoChangeLt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestDoNotPatchPodWithOtherControlRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestGetCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replicaset TestRemoveCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestDeleteControllerAndExpectations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestSetCondition"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/resourcequota TestPodReplenishmentUpdateFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/route TestIsResponsibleForRoute"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdatesPodStorage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulPodControlUpdatesSetStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControlScaleDownDeleteError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerAddPodNoSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestGetPodsForStatefulSetRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeleteVolumeNode_Positive_VolumeDoesntExistNodeDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeleteVolumeNode_Positive_TwoNodesOneDeleted"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumes_Positive_OneVolumeTwoNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_SetVolumeMountedByNode_Positive_UnsetWithoutInitialSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_RemoveVolumeFromReportAsAttached_Positive_Set"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeleteNode_Negative_NodeExistsHasChildVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_DeletePod_Positive_VolumeDoesNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_NodeExists_Positive_NodeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_NodeExists_Positive_NodeDoesntExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/reconciler Test_Run_Positive_OneDesiredVolumeAttachThenDetachWithMountedVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestFindingVolumeWithDifferentAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestDockerConfigEntryJSONDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestDockerConfigEntryJSONCompatibleEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestUrlsMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestContainerRegistryBasics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider/gcp TestAllProvidersNoMetadata"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestParseEnv"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestSetupOutputWriterFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDescribeObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDescribeListObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetAllListObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetListComponentStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetByFormatForcesFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestValidateArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTaint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopNodeAllMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestTopSubcommandsExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printReplicationControllerWithNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printPodWithShowLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd Example_printPodShowAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestEmbedClientKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestTokenAndCertAllowed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestOverwriteExistingCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestNewEmptyContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetContextsAll"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestGetContextsAllName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestGetFirstPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestCheckExitError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestDirectoryBuilder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestNamespaceOverride"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestResourceTuple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestHasNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPodResourceLimitsDefaulting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPurgingObsoleteStatusMapEntries"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSyncPodsDoesNotSetPodsThatDidNotRunTooLongToFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFakePodWorkers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestReasonCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestUpdateSymlinkNoSymlink"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestLoadFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestUpdateNoRotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/cm TestLibcontainerAdapterAdaptToSystemd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestNewPodAddedSetReconciled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestPodUpdateLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestGetPodNewerThanWhenPodDoesNotExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestGetPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/custommetrics TestGetCAdvisorCustomMetricsDefinitionPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestIsValidKey"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestContainerLogPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestCheckLegacyCleanup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestHostNetworkPluginInvocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestGetContainerSecurityOpts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestEnsureSandboxImageExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGarbageCollectZeroMaxContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestToRuntimeImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestKillContainerInPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSyncPodWithHostNetwork"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestContainerAndPodFromLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestPullWithNoSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestDockerKeyringLookup"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestImageStatsNoImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestIsContainerNotFoundError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestDiskPressureNodeFs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedbyQoSInodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestDeleteUnusedImagesRemoveAllUnusedImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestGarbageCollectImageNotOldEnough"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestSerializedPuller"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestGetPodContainerID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/lifecycle TestRunHandlerHttp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/lifecycle TestRunHandlerNil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pod TestParsePodFullName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestUpdateReadiness"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestHandleCrash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/qos TestGetContainerOOMScoreAdjust"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestGetPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestServeRunInContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerLogsWithLimitBytes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/portforward TestGetStreamPair"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/stats TestBuildSummary"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/volumemanager/reconciler Test_Run_Positive_DoNothing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestCreateOrUpdateMasterService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPersistentVolumeDescriber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestDescribeEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestTemplateStrings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintHumanReadableService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintDaemonSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestSortableResourceNamesSorting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestNodePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables Test_updateEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestTCPProxyUpdateDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestProxyUpdatePublicIPs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/util TestDeleteServiceConnections"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestProxyUpdatePortal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestPackUnpackDnsMsgFqdn"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestStickyLoadBalanaceWorksWithMultipleEndpointsRemoveOne"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestStickyLoadBalanceWorksWithEndpointFails"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestResourceNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/authorization/util TestResourceAttributesFrom"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/cronjob TestCronJobStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job TestJobStrategyWithGeneration"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestEtcdCreateBindingNoPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/secret/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryUpdateExternalService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficAnnotationNegative"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficAnnotationClusterIP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestBeforeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestRelease"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator TestSnapshot"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/controller TestRepairWithExisting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/portallocator TestAllocate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment TestStatusUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/storage TestEtcdCreateDeploymentRollbackNoDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/reconciliation TestComputeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversVerbStarCoveringMultiple"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversEnumerationNotCoveringResourceNameEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/apparmor TestValidateProfile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/group TestValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/seccomp TestGenerate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestRunAsAnyValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/serviceaccount TestTokenGenerateAndValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/config TestBroadcaster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/configz TestConfigz"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Negative_SecondOpBeforeFirstCompletesWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestDeleteChain"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestEnsureRuleErrorCreating"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestIPTablesWaitFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/mount TestGetMountRefs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net/sets TestIPNetSetDeleteMultiples"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings TestShortenString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings Example_trailingNewline"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestAttachDetach"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/azure_file TestMounterAndUnmounterTypeAssert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cinder TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/configmap TestPluginOptional"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flocker TestNewMounterDatasetName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/gce_pd TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestAllocate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestPluginVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/photon_pd TestMounterAndUnmounterTypeAssert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestCollectDataWithSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestCollectDataWithConfigMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestPluginOptional"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/projected TestPluginOptionalKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestVolumeMounterUnmounter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util TestMultipleUpdates"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_SingleOpWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_WaitEmptyWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_Wait"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/vsphere_volume TestGetDeviceName_PersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/deny TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/namespace/lifecycle TestAccessReviewCheckOnMissingNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podnodeselector TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/podpreset TestMergeVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestPrettyPrint"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitBelowTerminatingQuotaLimit"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitLimitedResourceWithMultipleQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitHostPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitReadOnlyRootFilesystem"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestAssignsDefaultServiceAccountAndToleratesMissingAPIToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/rbac TestSubjectLocator"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestCreateFromConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/factory TestBind"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/e2e_node/system TestValidateDockerInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestGetServerGroupsWithV1Server"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/dynamic TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_addReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestTTLList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestRunUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestReflectorWatchHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestResyncCheckPeriod"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestUpdateCallsPush"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestMergeContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestErrorReadingFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestErrorReadingNonFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/record TestEventf"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/transport TestBearerAuthRoundTripper"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/transport TestNew"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/clock TestFakeTick"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/integer TestIntMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/testing TestFakeHandlerWrongMethod"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/testing TestFakeHandlerWrongBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/bearertoken TestAuthenticateRequestTokenError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authorization/union TestAuthorizationSecondPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestConnectWithOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestDeleteInvokesAdmissionControl"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestScopeNamingGenerateLink"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestProxyRequestContentLengthAndTransferEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestWatchRead"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestPatchAnonymousField"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestPatchResourceWithVersionConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreBasicExport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/registry TestStoreDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestProxyRequestContentLengthAndTransferEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestPrepareRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/httplog TestHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/httplog TestLogOf"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/openapi TestBuildSwaggerSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/storage TestAnyResourcesForGroupEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestCacheWatcherCleanupNotBlockedByResult"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestCompact"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestGetToList"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestGuaranteedUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatchDeleteEventObjectHaveLatestRV"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestFiltering"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/cache TestSimpleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/request/basicauth TestBasicAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/token/oidc TestTLSConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/token/oidc TestOIDCAuthentication"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestMultiRESTMapperResourcesFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestKindToResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestInt64AmountAsInt64"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestParseQuantityString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityCmpInt64AndDec"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestJSONWhitespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource ExampleFormat"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateObjectMetaCustomName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apimachinery/registered TestAddThirdPartyVersionsBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/internalversion TestListOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestGroupVersionUnmarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestGroupVersionMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestTimeMarshalJSONUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1/validation TestValidateLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_CallsRegisteredFunctions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_GeneratedConversionOverriden"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_fuzz"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestFieldHas"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestLexerSequence"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestRequirementSelectorMatching"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestFmtRawDoc"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestExternalToInternalMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestUnversionedTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/schema TestParseResourceArg"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/framer TestReadLarge"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/framer TestReadInvalidFrame"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/framer TestJSONFrameReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/httpstream/spdy TestConnectionCloseIsImmediateThroughAProxy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/intstr TestFromInt"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/intstr TestIntOrStringMarshalJSONUnmarshalYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/rand TestIntnRange"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestStringSetDeleteMultiples"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/sets TestNewStringSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsDNS1123Subdomain"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation TestIsValidPortNum"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation/field TestToAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestNonSlidingUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestPollImmediateError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestPollForever"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestWaitForWithDelay"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/kube-aggregator/pkg/apiserver TestProxyHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdInitToken"
   },
   {
      "test_name" : "[k8s.io] Kubelet when scheduling a busybox command in a pod it should print the output to logs"
   },
   {
      "test_name" : "[k8s.io] Resource-usage [Serial] [Slow] regular resource usage tracking resource tracking for 10 pods per node"
   },
   {
      "test_name" : "[k8s.io] Container Manager Misc [Serial] Validate OOM score adjustments once the node is setup  pod infra containers oom-score-adj should be -998 and best effort container's should be 1000"
   },
   {
      "test_name" : "[k8s.io] CriticalPod [Serial] [Disruptive] when we need to admit a critical pod should be able to create and delete a critical pod"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestCreateWithNonExistentOwner"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestMasterService"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestMasterExportsSymbols"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAllocatable"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestServiceAccountTokenAutoCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestDeleteTestType"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestListTestTypesLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/parser TestBuilder"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestTopFlags"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorReregister"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorsendFrameworkMessage"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestSuicide_zeroTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/node TestRegister_withSemiKnownNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/podutil TestGzipList"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_singleActionEndsProcess"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestFIFO_addUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/deleter TestDeleteOne_Running"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/components/framework TestStatus_Update"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/config TestConfig_CreateDefaultConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/admission TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/errors TestNewInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestPriorityRESTMapperResourceForErrorHandling"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperRESTMappingSelectsVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestSetList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestAccessOwnerReferences"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/pod TestFindPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestDetectOverflowMultiply"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityCmp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestNewSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestParseResourceArg"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/apps/validation TestValidatePetSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/install TestCodec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversExactMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversAPIGroupStarCoveringStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversVerbStarCoveringStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversNonResourceURLs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestMetadata"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetAlternateSelfLink"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestConnect"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestPatchRequiresMatchingName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateInvokesAdmissionControl"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestParentResourceIsRequired"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestDelayReturnsError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestErrorsToAPIStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestRedirectOnMissingTrailingSlash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authenticator/bearertoken TestAuthenticateRequestTokenError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestDeltaFIFO_addReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestMultiIndexKeys"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToNodeLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestStoreToReplicaSetLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestListWatchesCanList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReflectorResyncChan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestReflectorListAndWatchWithErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestEventf"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestNewRequestSetsAccept"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestOrdersSubResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestURI"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestTransformUnstructuredError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestAbsPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHTTPContainerInfoGetterGetRootInfoWithError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListDaemonSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestEventGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListIngress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestLimitRangeList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetPetSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateStatusController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestResourceQuotaWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateThirdPartyResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestCreateMissingContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestNonExistentCommandLineFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestResolveRelativePaths"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestIsContextNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestIsConfigurationInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestValidateEmptyClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/portforward TestGetListener"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/testclient TestEmbeddedFakeImplementsInterface"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/framework TestHammerController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/framework TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/framework Example"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestProcessItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace TestSyncNamespaceThatIsTerminatingNonExperimental"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetSetIteratorRelist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_DeepCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_CallsRegisteredFunctions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_IgnoredConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestInvalidPtrValueKind"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns TestNamedSinglePortService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestParseRuntimeConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDescribeService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestNamePrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestSingularRootScopedObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDetectImagesContainerStopped"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGarbageCollectCadvisorFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainerInfoWithNoMatchingContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestSetMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestInstallThirdPartyResourceRemove"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestIsTunnelSyncHealthy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment/etcd TestEtcdCreateDeploymentRollbackNoDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/event TestGetAttrs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/event/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace TestNamespaceFinalizeStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/networkpolicy TestNetworkPolicyStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/networkpolicy/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget TestPodDisruptionBudgetStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podtemplate/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestGenerationNumber"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/replicaset/etcd TestScaleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/resourcequota/etcd TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/ipallocator/etcd TestErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service/portallocator TestAllocate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresource TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/thirdpartyresourcedata/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestConvertToVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestMetaValues"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer TestConvertTypesWhenDefaultNamesMatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer TestEncode_Ptr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/securitycontext TestModifyHostConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd/util TestEtcdHealthCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cache TestSimpleGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/errors TestSingularAggregate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/framer TestReadInvalidFrame"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/httpstream/spdy TestRoundTripAndNewConnection"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/integer TestIntMax"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/integer TestInt64Min"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestGetIptablesHasCheckCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/rand TestRangePanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/runtime TestCustomHandleCrash"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/sets TestStringSetDeleteMultiples"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strategicpatch TestStrategicMergePatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestWaitForWithDelay"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestItemFastSlowRateLimiter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestSimpleQueue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestAddTwoFireEarly"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStreamPing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/flexvolume TestPluginVolumeAttacher"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestBroadcaster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestUntilMultipleConditions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch/versioned TestDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/password/allow TestAllowPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/password/passwordfile TestBadPasswordFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/union TestAuthenticateRequestSuppressUnnecessaryErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/union TestAuthenticateRequestNoAuthenticators"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/union TestAuthenticateRequestNonePass"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/tokenfile TestBadTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/client/auth/oidc TestWrapTranport"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/examples TestRunSecureServer"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeDeleter"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/persistentvolumes TestPersistentVolumeMultiPVsPVCs"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestWriteKubeconfigIfNotExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestTokenValidationFailures"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestKindForGroupVersionKinds"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestDeleteWithOptionsQueryAndBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/filters TestGetAttribs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestDoRequestNotCreated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestBasicTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestStatefulSetBlockingPetIsCleared"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/dns/treecache TestTreeCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestNotRestRoutesHaveAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestLabelMerge"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestRangeAllocatorFullyAllocated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/node/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/etcd TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdCreateBinding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/resourcequota/etcd TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator/etcd TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/etcd TestStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/deployment/etcd TestScaleUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/etcd TestStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/storage/storageclass/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestVersionedConn"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/x509 TestX509Verifier"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/client/auth/gcp TestCachedTokenSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/client/auth/oidc TestVerifyJWTExpiry"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/client/auth/oidc TestClientCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/types TestExtractSingleBoolCommentTag"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/replicaset/planner TestEqual"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListScheduledJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListStorageClasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/scheduledjob TestGetParentUIDFromJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryExternalTrafficAnnotationHealthCheckNodePortUserAllocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/dynamic TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestVersionedParamsFromListOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestResultIntoWithErrReturnsErr"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestRequestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestNewWay"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestUnacceptableParamNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_detectLineJumpers"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFO_basic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestBasicTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestFileLocking"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateCleanWithCAClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd/api TestMinifySuccess"
   },
   {
      "test_name" : "[k8s.io] HA-master [Feature:HAMaster] survive addition/removal replicas multizone workers [Serial][Disruptive]"
   },
   {
      "test_name" : "[k8s.io] NodeOutOfDisk [Serial] [Flaky] [Disruptive] runs out of disk space"
   },
   {
      "test_name" : "//cmd/libs/go2idl/go-to-protobuf/protobuf:go_default_test"
   },
   {
      "test_name" : "//pkg/util/keymutex:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/kube-aggregator/pkg/controllers/autoregister TestCheckAPIService"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes:vsphere should test that deleting a PVC before the pod does not cause pod deletion to fail on PD detach"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationCRUD/Resources_should_not_be_deleted_from_underlying_clusters_when_OrphanDependents_is_true"
   },
   {
      "test_name" : "[k8s.io] Load capacity [Feature:Performance] should be able to handle 30 pods per node"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAppplyEdit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestDoNotAdoptOrCreateIfBeingDeletedRace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestGuaranteedUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdJoinDiscoveryFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/discovery TestDiscoveryAtAPIS"
   },
   {
      "test_name" : "PrivilegedPod should test privileged pod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/leaderelection TestTryAcquireOrRenewConfigMap"
   },
   {
      "test_name" : "[k8s.io] Federated ingresses [Feature:Federation] pinky Federated Ingresses should be deleted from underlying clusters when OrphanDependents is false"
   },
   {
      "test_name" : "[k8s.io] Federation deployments [Feature:Federation] Federated Deployment pinky should create and update matching deployments in underlying clusters"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/admit TestHandles"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdCompletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestLoadCertKeyBlocksPartialFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestLoadCertKeyBlocks"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestUpdateWithBadCertKeyData"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestNewPolicyRuleForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestGetPodsForJobAdopt"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/job TestDeletePod"
   },
   {
      "test_name" : "[k8s.io] Projected secret should be consumable from pods in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected secret optional updates should be reflected in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestHostCreateDirectoriesByAnnotations"
   },
   {
      "test_name" : "//plugin/pkg/admission/podtolerationrestriction/apis/podtolerationrestriction/validation:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/node TestRetrieveTrustedClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestGetServiceHealthCheckNodePort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficHealthCheckNodePortNegative"
   },
   {
      "test_name" : "[k8s.io] MemoryEviction [Slow] [Serial] [Disruptive]  when there is memory pressure should evict pods in the correct order (besteffort first, then burstable, then guaranteed)"
   },
   {
      "test_name" : "//pkg/kubelet/configmap:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Kubelet Container Manager [Serial] Validate OOM score adjustments once the node is setup docker daemon's oom-score-adj should be -999"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/types TestConvertToTimestamp"
   },
   {
      "test_name" : "TearDown Previous"
   },
   {
      "test_name" : "kubectl version"
   },
   {
      "test_name" : "[k8s.io] Density [Feature:Performance] should allow starting 30 pods per node using { ReplicationController} with 0 secrets and 0 daemons"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should increase cluster size if pending pods are small [Feature:ClusterSizeAutoscalingScaleUp]"
   },
   {
      "test_name" : "[k8s.io] Reboot [Disruptive] [Feature:Reboot] each node by triggering kernel panic and ensure they function upon restart"
   },
   {
      "test_name" : "[k8s.io] Cluster size autoscaling [Slow] should correctly scale down after a node is not needed when there is non autoscaled pool[Feature:ClusterSizeAutoscalingScaleDown]"
   },
   {
      "test_name" : "[k8s.io] PetSet [Slow] [Feature:PetSet] [k8s.io] Deploy clustered applications [Slow] [Feature:PetSet] should creating a working zookeeper cluster [Feature:PetSet]"
   },
   {
      "test_name" : "[k8s.io] ScheduledJob should not schedule jobs when suspended [Slow]"
   },
   {
      "test_name" : "[k8s.io] Networking [k8s.io] Granular Checks: Services [Slow] should function for node-Service: udp"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl run rc should create an rc from an image [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pod Disks Should schedule a pod w/ a readonly PD on two hosts, then remove both gracefully. [Slow] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl replace should update a single-container pod's image [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubectl client [k8s.io] Kubectl taint [Serial] should update the taint on a node"
   },
   {
      "test_name" : "[k8s.io] [HPA] Horizontal pod autoscaling (scale resource: CPU) [k8s.io] [Serial] [Slow] ReplicationController Should scale from 1 pod to 3 pods and from 3 to 5 and verify decision stability"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should update labels on modification [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy logs on node with explicit kubelet port using proxy subresource [Conformance]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (non-root,0666,default) [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Probing container should be restarted with a exec \"cat /tmp/health\" liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Port forwarding [k8s.io] With a server that expects no client request should support a client that connects, sends no data, and disconnects [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should set mode on item file [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should set DefaultMode on files [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Pods should allow activeDeadlineSeconds to be updated [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings and Item mode set[Conformance]"
   },
   {
      "test_name" : "[k8s.io] Service endpoints latency should not be very high [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should verify ResourceQuota with best effort scope."
   },
   {
      "test_name" : "[k8s.io] Pods should be restarted with a /healthz http liveness probe [Conformance]"
   },
   {
      "test_name" : "[k8s.io] V1Job should keep restarting failed pods"
   },
   {
      "test_name" : "[k8s.io] MetricsGrabber should grab all metrics from API server."
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy to cadvisor using proxy subresource [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Proxy version v1 should proxy to cadvisor [Conformance]"
   },
   {
      "test_name" : "[k8s.io] ResourceQuota should create a ResourceQuota and capture the life of a service."
   },
   {
      "test_name" : "[k8s.io] Job should keep restarting failed pods"
   },
   {
      "test_name" : "[k8s.io] HostPath should support r/w"
   },
   {
      "test_name" : "[k8s.io] Generated release_1_5 clientset should create pods, delete pods, watch pods"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality Scaling down before scale up is finished should wait until current pod will be running and ready before it will be removed"
   },
   {
      "test_name" : "[k8s.io] CronJob should replace jobs when ReplaceConcurrent"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume with mappings [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Projected updates should be reflected in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Downward API volume should set mode on item file [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] StatefulSet [k8s.io] Basic StatefulSet functionality [StatefulSetBasic] should provide basic identity"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes should support (root,0666,tmpfs) [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] HostPath should support r/w [Volume]"
   },
   {
      "test_name" : "[k8s.io] PrivilegedPod should enable privileged commands"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume with mappings and Item Mode set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Sysctls should support sysctls"
   },
   {
      "test_name" : "[k8s.io] ConfigMap updates should be reflected in volume [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] Secrets should be consumable from pods in volume as non-root with defaultMode and fsGroup set [Conformance] [Volume]"
   },
   {
      "test_name" : "[k8s.io] GCP Volumes [k8s.io] GlusterFS should be mountable [Volume]"
   },
   {
      "test_name" : "[k8s.io] EmptyDir wrapper volumes should not cause race condition when used for configmaps [Serial] [Slow]"
   },
   {
      "test_name" : "[k8s.io] Network Partition [Disruptive] [Slow] [k8s.io] [ReplicationController] should recreate pods scheduled on the unreachable node AND allow scheduling of pods on a node after it rejoins the cluster"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes [Volume][Disruptive][Flaky] when kubelet restarts Should test that a file written to the mount before kubelet restart is stat-able after restart."
   },
   {
      "test_name" : "[k8s.io] ClusterDns [Feature:Example] should create pod that uses dns"
   },
   {
      "test_name" : "[k8s.io] [Feature:Example] [k8s.io] Liveness liveness pods should be automatically restarted"
   },
   {
      "test_name" : "[k8s.io] Federation daemonsets [Feature:Federation] DaemonSet objects should be created and deleted successfully"
   },
   {
      "test_name" : "[k8s.io] Federation namespace [Feature:Federation] Namespace objects all resources in the namespace should be deleted when namespace is deleted"
   },
   {
      "test_name" : "[k8s.io] Federated Services [Feature:Federation] with clusters Federated Service should not be deleted from underlying clusters when OrphanDependents is nil"
   },
   {
      "test_name" : "BeforeSuite"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a batch of pods latency/resource should be within limit when create 35 pods with 0s interval [Benchmark]"
   },
   {
      "test_name" : "//jenkins:bootstrap_test"
   },
   {
      "test_name" : "//mungegithub/mungers/e2e:go_default_test"
   },
   {
      "test_name" : "//mungegithub/mungers/mungerutil:go_default_test"
   },
   {
      "test_name" : "//prow/plugins/close:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/auth TestAuthorizationAttributeDetermination"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/client TestAPIVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/federation TestFederationAPI/apiGroup"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/garbagecollector TestOrphaning"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestAppsPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/master TestExtensionsPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/thirdparty TestThirdPartyDiscovery"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPodDeletionWithDswp"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeDeleter"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration/volume TestPersistentVolumeMultiPVs"
   },
   {
      "test_name" : "//cmd/kubeadm/app/phases/token:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/ingress:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/replicaset:go_default_test"
   },
   {
      "test_name" : "//federation/pkg/federation-controller/util/planner:go_default_test"
   },
   {
      "test_name" : "//pkg/client/leaderelection:go_default_test"
   },
   {
      "test_name" : "//pkg/client/unversioned/remotecommand:go_default_test"
   },
   {
      "test_name" : "//pkg/cloudprovider/providers/azure:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/job:go_default_test"
   },
   {
      "test_name" : "//pkg/controller/volume/attachdetach:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/gpu/nvidia:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/pleg:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/pod:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/server:go_default_test"
   },
   {
      "test_name" : "//pkg/kubelet/server/stats:go_default_test"
   },
   {
      "test_name" : "//pkg/printers:go_default_xtest"
   },
   {
      "test_name" : "//pkg/quota:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/authorization/subjectaccessreview:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/batch/job:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/batch/job/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/componentstatus:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/event:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/persistentvolume/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/persistentvolumeclaim:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/portallocator/controller:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/core/service/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/extensions/thirdpartyresourcedata/storage:go_default_test"
   },
   {
      "test_name" : "//pkg/registry/policy/poddisruptionbudget:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/empty_dir:go_default_test"
   },
   {
      "test_name" : "//pkg/volume:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/nfs:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/quobyte:go_default_test"
   },
   {
      "test_name" : "//pkg/volume/util/operationexecutor:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/admit:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/gc:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/namespace/autoprovision:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/persistentvolume/label:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/admission/storageclass/default:go_default_test"
   },
   {
      "test_name" : "//plugin/pkg/scheduler/algorithm:go_default_test"
   },
   {
      "test_name" : "[k8s.io] Kubelet when scheduling a read only busybox container it should not write to root filesystem [Conformance]"
   },
   {
      "test_name" : "[k8s.io] Kubelet Cgroup Manager Pod containers On scheduling a Guaranteed Pod Pod containers should have been created under the cgroup-root"
   },
   {
      "test_name" : "[k8s.io] Summary API when querying /stats/summary should report resource usage through the stats api"
   },
   {
      "test_name" : "[k8s.io] EmptyDir volumes when FSGroup is specified [Feature:FSGroup] volume on default medium should have the correct mode using FSGroup [Volume]"
   },
   {
      "test_name" : "[k8s.io] ConfigMap should be consumable from pods in volume as non-root with FSGroup [Feature:FSGroup] [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/hyperkube TestTopFlags"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app/options TestAddFlagsFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/install TestRoundTripTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/cmd TestRunGenerateToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/discovery/token TestRunForEndpointsAndReturnFirst"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestWriteStaticPodManifests"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestGetAPIServerCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/master TestGetExtraParameters"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/certs/pkiutil TestCertOrKeyExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/phases/token TestEncodeTokenSecretData"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/mungedocs TestAnalytics"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsAddSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/aws/route53 TestResourceRecordSetsReplace"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/dnsprovider/providers/google/clouddns TestResourceRecordSetsDifferentTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/configmap TestConfigMapController"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/service TestServiceController_ensureDnsRecords"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/service TestProcessServiceDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util TestFederatedUpdaterTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/pkg/federation-controller/util/podanalyzer TestAnalyze"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster TestClusterStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/registry/cluster/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestConversionError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestDefaulting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestSetControllerConversion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/events TestSortableEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/install TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/service TestGetLoadBalancerSourceRanges"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestPodLogOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultReplicationControllerImagePullPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1 TestSetDefaultLimitRangeItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/pod TestFindPort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateEvent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateDifferentApiVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateReplicationControllerUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateNodeUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateServiceUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/validation TestValidateSysctls"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestListTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestUnstructuredGetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/tests TestProtobufDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/extensions/validation TestValidateDaemonSetStatusUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestValidateRoleValidRoleNoNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/settings/validation TestValidatePodPresetsiVolumeMountError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestHelperGetServerAPIVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/remotecommand TestStream"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/remotecommand TestV2ErrorStreamReading"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestIpPermissionExistsHandlesMultipleGroupIds"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestFindInstanceByNodeNameExcludesTerminatedInstances"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestDescribeLoadBalancerOnGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestDeviceAllocator"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/aws TestBackoffAllErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/azure TestReconcileSecurityWithSourceRanges"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_clusterName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos TestIPAddress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_Instances"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/mesos Test_Clusters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/cloudprovider/providers/openstack TestCaller"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller TestControllerExpectations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSufficientCapacityNodeDaemonLaunchesPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestSelectorDaemonDealsWithExistingPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestPortConflictNodeDaemonDoesNotLaunchCriticalPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/daemon TestAddPodOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestDeleteReplicaSetOrphan"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/garbagecollector TestGCListWatcher"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestReleaseCIDRSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestMonitorNodeStatusUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestAddNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestAddAfterTry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCreatePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestGetMinTolerationTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestExecute"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/node TestCancelAndReadd"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestScaleUp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestComputedToleranceAlgImplementation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestReplicaCalcMissingMetricsUnreadyScaleDown"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestCPUEmptyMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler/metrics TestRESTClientCPUEmptyMetricsForOnePod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podgc TestGCOrphaned"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestSyncReplicationControllerDormancy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestUpdatePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestControllerUpdateRequeue"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/replication TestDeletionTimestamp"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestDefaultStatefulSetControlInitAnnotation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestDefaultStatefulSetControlPodRecreateDeleteError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerRespectsTermination"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestStatefulSetControllerUpdatePodChangeControllerRef"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/statefulset TestGetParentNameAndOrdinal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_VolumeNodeExists_Positive_VolumeExistsNodeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_GetAttachedVolumes_Positive_NoVolumesOrNodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_RemoveVolumeFromReportAsAttached_AddVolumeToReportAsAttached_Positive"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_SetNodeStatusUpdateNeededError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_updateNodeStatusUpdateNeededError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_VolumeExists_Positive_VolumeExistsNodeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/cache Test_VolumeExists_Positive_VolumeDoesntExistNodeExists"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/attachdetach/reconciler Test_Run_Negative_OneDesiredVolumeAttachThenDetachWithUnmountedVolumeUpdateStatusFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestFindingPreboundVolumes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestDisablingDynamicProvisioner"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/volume/persistentvolume TestControllerSync"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestDecodeDockerConfigFieldAuth"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/credentialprovider TestKeyringHitWithUnqualifiedLibraryDockerHub"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestParseLiteralSource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestDeploymentNotFoundError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestUpdateAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestAnnotateObjectFromFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestApplyNULLPreservation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestExtractFileSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestCreateRole"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteNamedObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteAllIgnoreNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestDeleteMultipleObjectContinueOnMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestEdit"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestPodAndContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetObjects"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetObjectsFiltered"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestGetObjectIgnoreNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd TestLabelErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/auth TestRunAccessCheck"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestEmbedClientCert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestSetBytesBad"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestInsecureClearsCA"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/config TestNewEmptyCluster"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestUpdateOldSelectorValuesForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestLogsForObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestNewFactoryDefaultFlagBindings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util TestSubstitueUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/util/editor TestEditor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/resource TestResourceNamesWithoutResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestNodeIPParam"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestComposeDNSSearch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPodPhaseWithRestartNever"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHasHostNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestSyncLoopAbort"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFilterOutTerminatedPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestHandlePodAdditionsInvokesPodAdmitHandlers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestPodVolumesExist"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestVolumeAttachAndMountControllerEnabled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestRotateCertWaitingForResultError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestLoadCertKeyBlocksEmptyFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestReadPodsFromFileInDirAdded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/config TestExtractFromHttpBadness"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/container TestFieldPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestPersistentCheckpointHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockershim TestModifyContainerNamespaceOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestSeccompLocalhostProfileIsLoaded"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestKillContainerInPodWithPreStop"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestIsAExitError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestGetIPCMode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestFmtDockerOpts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/dockertools TestImageStatsWithCachedImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestInodePressureNodeFsInodes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedByQoS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/eviction TestOrderedByQoSMemory"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestGarbageCollectCadvisorFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestParallelPuller"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/images TestApplyDefaultImageTag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestPullImage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestLogOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestGetNetNS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/kuberuntime TestContainerAnnotations"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/kubenet TestInit_MTU"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/pod TestDeletePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestCleanupPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/prober TestHTTPHeaders"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestListImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/rkt TestGenerateRunCommand"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestSecretStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestSecretStoreGetNeverRefresh"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/secret TestCustomTTL"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestAuthorizationSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server TestContainerLogs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/portforward TestRequestID"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestUnchangedStatusPreservesLastTransitionTime"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestStatusEquality"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestStatusNormalizationEnforcesMaxBytes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/status TestDoNotDeleteMirrorPods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers TestColumnPrint"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintNonTerminatedPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/printers/internalversion TestPrintPodWithLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/config TestNewServiceAddedAndNotified"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestClusterIPEndpointsJump"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/iptables TestBuildServiceMapServiceTypeExternalName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestRangeAllocatorFullyAllocated"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestLoadBalanceWorksWithMultipleEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/userspace TestStickyLoadBalanceWorksWithServiceRemoval"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestUDPProxyTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestUDPProxyUpdateDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestTCPProxyUpdateDeleteUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestLoadBalanceWorksWithServiceRemoval"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/proxy/winuserspace TestStickyLoadBalanceWorksWithNewServiceCalledSecond"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota TestContains"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota/evaluator/core TestPodConstraintsFunc"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/quota/evaluator/core TestServiceEvaluatorUsage"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/autoscaling/horizontalpodautoscaler/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/configmap/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/limitrange/storage TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestDeleteNamespaceWithCompleteFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/storage TestShortNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolume/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/storage TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/storage TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/podtemplate/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/replicationcontroller TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/rest TestGetServersToValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryIPLoadBalancer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestBitCount"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator TestCountBits"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/controller TestRepair"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset TestDefaultGarbageCollectionPolicy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/podsecuritypolicy/storage TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/replicaset/storage TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/storage TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversMultipleRulesMissingSingleVerbResourceCombination"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversEnumerationNotCoveringAPIGroupStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversEnumerationNotCoveringResourceStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestCoversNonResourceURLsStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/rbac/validation TestDefaultRuleResolver"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestValidatePodSecurityContextFailures"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy TestValidatePodSecurityContextSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/seccomp TestValidateContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/security/podsecuritypolicy/user TestNonRootValidate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/serviceaccount TestMakeSplitUsername"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestWrap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestAllPtrFieldsNil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestFindCIDRClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/bandwidth TestReset"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_ThirdOpAfterFirstCompletesWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_WaitEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/goroutinemap Test_NewGoRoutineMap_Positive_Wait"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/hash TestDeepObjectPointer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/i18n TestTranslationPlural"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestEnsureChainIpv6"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/iptables TestEnsureRuleErrorChecking"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/keymutex Test_SingleLock_SingleUnlock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/labels TestCloneAndAddLabel"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/node TestGetPreferredAddress"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/oom TestPidListerFailure"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/slice TestCopyStrings"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/strings TestSplitQualifiedName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/system TestIsMasterNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/threading TestMaxLockPeriod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestMetricsDuRequireRealDirectory"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestMounterAndUnmounterTypeAssert"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cephfs TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/cephfs TestConstructVolumeSpec"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/empty_dir TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/empty_dir TestMetrics"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/fc TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/fc TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/fc TestPluginVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/fc TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestCanSupport"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestGetAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/glusterfs TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/host_path TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/iscsi TestExtractDeviceAndPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/quobyte TestPersistentClaimReadOnlyFlag"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/scaleio TestUtilValidateConfigs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/secret TestPlugin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Positive_TwoSubOps"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Negative_SecondOpBeforeFirstCompletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/nestedpendingoperations Test_NewGoRoutineMap_Negative_SecondOpBeforeFirstCompletesWithExpBackoff"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/util/operationexecutor TestOperationExecutor_VerifyVolumesAreAttachedConcurrently"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/admit TestAdmission"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/imagepolicy TestAnnotationFiltering"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/resourcequota TestAdmitLimitedResourceNoQuota"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAdmitRunAsUser"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/security/podsecuritypolicy TestAssignSecurityContext"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestDeniesInvalidServiceAccount"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/serviceaccount TestAddImagePullSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/token/bootstrap TestTokenAuthenticator"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPodFitsHostPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestLeastRequested"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestNodeAffinityAnnotationsPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestNewNodeLabelPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestZoneSelectorSpreadPriority"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/priorities TestTaintAndToleration"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestFindFitSomeError"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestHumanReadableFitError"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/e2e_node/system TestValidateParseKernelConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/discovery TestFilteredBy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRequestFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestDoRawRequestFailed"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestHttpMethods"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestSetTwiceError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest TestRequestVersionedParamsFromListOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/rest/watch TestDecoder_SourceClose"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestDeltaFIFO_basic"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestPopReleaseLock"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestCloseWatchChannelOnError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestFIFOCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/cache TestIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestPrecedenceTokenFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestToleratingMissingFiles"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestIsConfigurationInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateEmptyClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateMissingCAFileClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd TestValidateEmptyAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api TestFlattenSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/tools/clientcmd/api Example_emptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/testing TestFakeHandlerWrongPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestCopyShifting"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/workqueue TestAddWhileProcessing"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/bearertoken TestAuthenticateRequest"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authentication/request/x509 TestX509Verifier"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/authorization/union TestAuthorizationFirstPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetWithOptionsRouteParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestGetWithOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestPatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestUpdateREST"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints TestCreateInNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestPatchResourceWithConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestPatchWithAdmissionRejection"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/endpoints/handlers TestParseTimeout"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestServeHTTP"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestProxyUpgrade"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestProxyUpgradeErrorResponse"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestGenericHttpResponseCheckerLimitReader"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/generic/rest TestInputStreamTransport"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/registry/rest TestFillObjectMetaSystemFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestCustomHandlerChain"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/filters TestCORSAllowedMethods"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/filters TestCompileRegex"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/healthz TestInstallHandler"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/httplog TestNewLogged"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server/options TestServerRunWithSNI"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage TestReflectorForWatchCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestListAcrossDirectories"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestGuaranteedUpdateNoChange"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd TestSendResultDeleteEventHaveLatestIndex"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestConditionalDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/etcd3 TestWatchFromZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/storage/tests TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/cache TestEvict"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/util/wsstream TestStreamVersionedCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authenticator/password/allow TestAllowPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/plugin/pkg/authorizer/webhook TestNewFromConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/errors TestFromObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/meta TestRESTMapperRESTMapping"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestDetectOverflowScale"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestQuantityParseZero"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestNewSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestScaledValue"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/resource TestNeg"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/testing TestValueFuzz"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateObjectMetaNamespaces"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation TestValidateObjectMetaOwnerReferences"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation/path TestValidatePathSegmentName"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/api/validation/path TestValidateWithMultiErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestLabelSelectorAsMap"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/apis/meta/v1 TestTimeProto"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_tags"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestConverter_FieldRename"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestDeepCopy"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion TestDeepCopyArraySeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/conversion/unstructured TestRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/fields TestNilMapIsValid"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestSetString"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/labels TestLabelHas"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime TestConvertToVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/runtime/serializer/versioning TestNestedEncode"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/net TestIPNetEqual"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/validation/field TestPath"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/wait TestUntilReturnsImmediately"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestSplitYAMLDocument"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/util/yaml TestGuessJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apimachinery/pkg/watch TestBroadcasterWatcherClose"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/sample-apiserver/pkg/apis/wardle/install TestRoundTripTypes"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdInitKubernetesVersion"
   },
   {
      "test_name" : "[k8s.io] Node Container Manager [Serial] Validate Node Allocatable set's up the node and runs the test"
   },
   {
      "test_name" : "[k8s.io] Density [Serial] [Slow] create a batch of pods latency/resource should be within limit when create 10 pods with 0s interval"
   },
   {
      "test_name" : "[k8s.io] GarbageCollect [Serial] Garbage Collection Test: Many Restarting Containers Should eventually garbage collect containers when we exceed the number of dead containers per container"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestAPIVersions"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestSchedulerExtender"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestCascadingDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestStressingCascadingDeletion"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestWatchSucceedsWithoutArgs"
   },
   {
      "test_name" : "k8s.io/kubernetes/test/integration TestPersistentVolumeMultiPVsDiffAccessModes"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kube-apiserver/app TestLongRunningRequestRegexp"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestUpdateTestType"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/client-gen/testoutput/clientset_generated/test_internalclientset/typed/testgroup.k8s.io/unversioned TestUpdateStatusTestType"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/cmd/km TestTopHelp"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/election TestEtcdMasterNoOtherThenConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/executor TestExecutorShutdown"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/minion/tasks TestAfterDeath"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/proc TestProc_singleAction"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestPQ"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/queue TestFIFO_addPopAdd"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/config TestConfig_ReadError"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/integration TestScheduler_LifeCycle"
   },
   {
      "test_name" : "k8s.io/kubernetes/contrib/mesos/pkg/scheduler/podtask TestFilterRoles"
   },
   {
      "test_name" : "k8s.io/kubernetes/federation/cmd/federation-apiserver/app TestRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api TestAccessOwnerReferences"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/errors Test_reasonForError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestMultiRESTMapperKindsFor"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestPriorityRESTMapperKindForErrorHandling"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestRESTMapperReportsErrorOnBadVersion"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/meta TestTypeMetaSelfLinker"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestRemoveInt64Factors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantitySubZeroPreservesSuffix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestQuantityNeg"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestNewScaledSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestNegateRoundTrip"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/resource TestScaledValueInternal"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned TestDurationMarshalJSON"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/unversioned/validation TestValidateLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/componentconfig/install TestRESTMapper"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversEnumerationNotCoveringAPIGroupStar"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestCoversEnumerationNotCoveringResourceNameEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestNonEmptyList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestGetWithOptionsRouteParams"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestDeleteWithOptions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdatePreventsMismatchedNamespace"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestUpdateMissing"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestCreateWithName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestPatchResourceWithVersionConflict"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver TestWatchRead"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/auth/authenticator/bearertoken TestAuthenticateRequestTokenInvalid"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/record TestMultiSinkCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestRequestAbsPathJoins"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestResultIntoWithErrReturnsErr"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestBackoffLifecycle"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestCheckRetryClosesBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestUnacceptableParamNames"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/restclient TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestGetSwaggerSchema"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateDaemonSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListDeploymentsLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeploymentRollback"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListEndpoints"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetEndpointWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListJob"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeClaimGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPersistentVolumeClaimUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodTemplateWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestPodSecurityPolicyGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestListReplicaSets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetReplicaSet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestCreateController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestResourceQuotaDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestDeleteService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetThirdPartyResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestGetThirdPartyResourceWithNoName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned TestUpdateThirdPartyResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd TestOldMergoLib"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api TestShortenSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api Example_minifyAndShorten"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/clientcmd/api Example_ofOptionsConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/portforward TestForwardPorts"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/unversioned/testclient TestErrors"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/namespace TestFinalized"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetIDDNS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetIDVolumeClaims"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/petset TestPetSetControllerDeletes"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/podautoscaler TestDefaultScaleUpDeployment"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_WithConversionOverriden"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_tags"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestConverter_FieldRename"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestDeepCopySliceSeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestDeepCopyArraySeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/conversion TestDeepCopyMapSeparate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestDeterministicParse"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/fields TestSetMatches"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestGetServerAddressByClientCIDRs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestBadPrinter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintPodWithLabels"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestSortableEvents"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDetectImagesInitialDetect"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestDetectImagesWithRemovedImages"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestFreeSpaceRemoveByLeastRecentlyUsed"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGarbageCollectBelowLowThreshold"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestGetContainerInfoWithNoContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestExecInContainerNoSuchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestExecInContainerNoSuchContainer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/client TestNewKubeletClient"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/network/exec TestPluginStatusHookIPv6"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestLabelGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/labels TestRequirementSelectorMatching"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestDiscoveryAtAPIS"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestInstallThirdPartyAPIDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/componentstatus TestGet_BadName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/configmap/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller TestControllerStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/controller/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/deployment TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/experimental/controller/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/registry TestStoreGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestServeHTTP"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/generic/rest TestProxyRequestContentLengthAndTransferEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/ingress/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/limitrange/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/namespace/etcd TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node TestMatchNode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/node/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolume/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/persistentvolumeclaim/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset TestPetSetStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/petset/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod TestMatchPod"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdCreateWithContainersNotFound"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdCreateWithExistingContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/pod/etcd TestEtcdUpdateNotScheduled"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/poddisruptionbudget/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/podsecuritypolicy/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/scheduledjob TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret TestExportSecret"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/secret/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryIPReallocation"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestCheckGeneratedNameError"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceStatusStrategy"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestArrayOfRuntimeObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestNestedObject"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime TestUnstructuredListSetters"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer TestVersionedEncoding"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/runtime/serializer/protobuf TestDecode"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestWatchCacheBasic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd TestGuaranteedUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestWatchList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestFakeClock"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util TestCompileRegex"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util Example_noTrailingNewline"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/deployment TestCountAvailablePods"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestBackoffGC"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/flowcontrol TestBasicThrottle"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/framer TestReadLarge"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/integer TestIntMin"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/net TestProxierWithNoProxyCIDR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/rand TestString"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/validation TestIsValidUserId"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wait TestNonSlidingUntil"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/wsstream TestStreamSurvivesPanic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestDecodeBrokenYAML"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/yaml TestYAMLOrJSONDecoder"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/aws_ebs TestGetDeviceName_PersistentVolume"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestName"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/watch TestStreamWatcher"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/admission/limitranger TestLimitRangerCacheMisses"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/union TestAuthenticateRequestFirstPasses"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authorizer/webhook TestWebhookCache"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/algorithm/predicates TestPredicatesRegistered"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/app/util TestValidTokenPopulatesSecrets"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apimachinery/announced TestFactoryRegistry"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apis/rbac/validation TestNonResourceURLCovers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/filters TestConstructResponseWriter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/apiserver/request TestGetAPIRequestInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache TestHammerController"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache Example"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/cache ExampleNewInformer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/client/typed/discovery TestDeferredDiscoveryRESTMapper_CacheMiss"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver TestPrepareRun"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/authorizer TestNewAlwaysDenyAuthorizer"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/genericapiserver/filters TestCORSAllowedOrigins"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl TestPrintService"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestMakeDevices"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet TestCriticalPrioritySorting"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/server/portforward TestPortForwardStreamReceived"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/apps/petset/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/batch/job/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller TestSelectableFieldLabelConversions"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/controller/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/endpoint/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/event/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestCreateSetsFields"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/namespace/etcd TestDeleteNamespaceWithCompleteFinalizers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/persistentvolumeclaim/etcd TestUpdateStatus"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/pod/etcd TestEtcdCreateWithExistingContainers"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/allocator/etcd TestStore"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service/ipallocator/etcd TestEmpty"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/serviceaccount/etcd TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/controller/etcd TestGet"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/controller/etcd TestUpdate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/daemonset/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/networkpolicy/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresource/etcd TestDelete"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/etcd TestCreate"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/extensions/thirdpartyresourcedata/etcd TestList"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage TestHighWaterMark"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/storage/etcd3 TestPrefix"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/cert TestMakeCSR"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/clock TestFakeClockSleep"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/clock TestFakeAfter"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/util/workqueue TestDeduping"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume/downwardapi TestItemMode"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/auth/authenticator/request/anonymous TestAnonymous"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/libs/go2idl/types Test_Type_IsPrimitive"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/scheduledjob TestGroupJobsByParent"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/master TestInstallMultipleAPIs"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/service TestServiceRegistryCreateMultiNodePortsService"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetServerGroupsWithV1Server"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/discovery TestGetSwaggerSchemaFail"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestSuccess"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestDoRequestAcceptedNoContentReturned"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestCreateBackoffManager"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestSetKubernetesDefaultsUserAgent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestURLTemplate"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestTransformUnstructuredError"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestVerbs"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestBody"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/rest TestWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_enqueueingWithLister"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_DeleteExistingNonPropagated"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestDeltaFIFO_HasSynced"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestFIFO_addIfNotPresent"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/cache TestReflectorListAndWatch"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestCertificateData"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestBasicAuthData"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestCreateClean"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestErrorReadingNonFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestConfirmUsableMissingConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestIsEmptyConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateMissingReferencesConfig"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateEmptyClusterInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/clientcmd TestValidateMultipleMethodsAuthInfo"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/1.4/tools/record TestEventAggregatorByReasonMessageFunc"
   },
   {
      "test_name" : "//pkg/master/thirdparty:go_default_test"
   },
   {
      "test_name" : "//pkg/client/chaosclient:go_default_test"
   },
   {
      "test_name" : "//pkg/util/dbus:go_default_test"
   },
   {
      "test_name" : "//pkg/util/net/sets:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/sliceutils TestPodsByCreationTimeLen"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/util/sliceutils TestByImageSizeSwap"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/controller/deployment TestSyncOverlappedDeployment"
   },
   {
      "test_name" : "AfterSuite"
   },
   {
      "test_name" : "Build"
   },
   {
      "test_name" : "[k8s.io] PersistentVolumes:GCEPD [Volume] should test that deleting the Namespace of a PVC and Pod causes the successful detach of Persistent Disk"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdJoinToken"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/volume TestVolumeZoneConfInvalidZoneInStorageClass"
   },
   {
      "test_name" : "k8s.io/kubernetes/plugin/pkg/scheduler/core TestInvalidateCachedPredicateItem"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/client-go/util/certificate TestLoadCertKeyBlocksNoFile"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubectl/cmd/set TestUpdateRuleOptionsWithResource"
   },
   {
      "test_name" : "k8s.io/kubernetes/vendor/k8s.io/apiserver/pkg/server TestIPLimitInitialization"
   },
   {
      "test_name" : "[k8s.io] Opaque resources should not schedule pods that exceed the available amount of opaque integer resource."
   },
   {
      "test_name" : "//pkg/util/tolerations:go_default_test"
   },
   {
      "test_name" : "k8s.io/kubernetes/cmd/kubeadm/test/cmd TestCmdJoinDiscovery"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/api/v1/service TestRequestsOnlyLocalTraffic"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/registry/core/service TestServiceRegistryExternalTrafficHealthCheckNodePortNegativeBeta"
   },
   {
      "test_name" : "[k8s.io] Kubelet Container Manager [Serial] Validate OOM score adjustments once the node is setup burstable container's oom-score-adj should be between [2, 1000)"
   },
   {
      "test_name" : "[k8s.io] Dynamic provisioning [k8s.io] DynamicProvisioner should test that deleting a claim before the volume is provisioned deletes the volume. [Volume]"
   },
   {
      "test_name" : "k8s.io/kubernetes/pkg/kubelet/certificate TestShouldRotate/just_started"
   }
]
