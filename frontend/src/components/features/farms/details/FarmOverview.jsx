import {
  Building2,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Ruler,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { farmService } from "../../../../services/farmService";
import Card, { CardContent } from "../../../ui/card";
import { useToast } from "../../../ui/use-toast";

function FarmOverview({ farm, usersData: propUsersData }) {
  const [usersData, setUsersData] = useState(propUsersData);
  const [loading, setLoading] = useState(!propUsersData);
  const { toast } = useToast();

  // Use prop data if available, otherwise fetch
  useEffect(() => {
    if (propUsersData) {
      setUsersData(propUsersData);
      setLoading(false);
      return;
    }

    const fetchUsersData = async () => {
      if (!farm?.id) return;

      try {
        setLoading(true);
        const data = await farmService.getFarmUsersData(farm.id);
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching users data:", error);
        // Fallback to farm.userCount if API fails
        setUsersData({ total: farm.userCount || 0, users: [] });

        toast({
          variant: "destructive",
          title: "Warning",
          description: "Could not load user details. Using basic data.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsersData();
  }, [farm?.id, farm.userCount, propUsersData, toast]);

  // Update data when prop changes
  useEffect(() => {
    if (propUsersData) {
      setUsersData(propUsersData);
    }
  }, [propUsersData]);

  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  const formattedCreationDate = formatDate(farm.createdAt);

  // Get farm manager from users data
  const farmManager = usersData?.users?.find(
    (user) =>
      user.type === "Administrator" ||
      user.type === "ADMIN" ||
      user.type === "Farmer" ||
      user.type === "FARMER",
  );

  // Get contact info (if available in farm data or use manager's)
  const contactEmail = farm.email || farmManager?.email || "contact@farm.com";
  const contactPhone = farm.phone || "+1 (555) 123-4567";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Farm Information Card */}
      <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center">
            <Building2 className="mr-3 h-6 w-6 text-amber-700" />
            <h3 className="text-xl font-semibold text-amber-900">
              Farm Information
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white/60 p-3">
              <span className="font-medium text-amber-800">Farm ID:</span>
              <span className="font-semibold text-amber-900">#{farm.id}</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white/60 p-3">
              <span className="font-medium text-amber-800">Size:</span>
              <div className="flex items-center">
                <Ruler className="mr-2 h-4 w-4 text-amber-600" />
                <span className="font-semibold text-amber-900">
                  {farm.size} hectares
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white/60 p-3">
              <span className="font-medium text-amber-800">Established:</span>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-amber-600" />
                <span className="font-semibold text-amber-900">
                  {formattedCreationDate}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white/60 p-3">
              <span className="font-medium text-amber-800">Location:</span>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-amber-600" />
                <span className="font-semibold text-amber-900">
                  {farm.location}
                </span>
              </div>
            </div>
          </div>

          {farm.description && (
            <div className="mt-6 rounded-lg bg-white/60 p-4">
              <h4 className="mb-2 text-sm font-semibold text-amber-800">
                Description
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                {farm.description}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact & Management Card */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center">
            <User className="mr-3 h-6 w-6 text-blue-700" />
            <h3 className="text-xl font-semibold text-blue-900">
              Management & Contact
            </h3>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-lg bg-white/60 p-4">
                  <div className="animate-pulse">
                    <div className="mb-2 h-4 rounded bg-gray-200"></div>
                    <div className="h-6 rounded bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg bg-white/60 p-4">
                <div className="mb-2 flex items-center">
                  <User className="mr-2 h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Farm Manager
                  </span>
                </div>
                <p className="font-semibold text-blue-900">
                  {farmManager?.name || "Not assigned"}
                </p>
                {farmManager?.type && (
                  <p className="mt-1 text-xs text-blue-600">
                    Role: {farmManager.type}
                  </p>
                )}
              </div>

              <div className="rounded-lg bg-white/60 p-4">
                <div className="mb-2 flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Contact Phone
                  </span>
                </div>
                <p className="font-semibold text-blue-900">{contactPhone}</p>
              </div>

              <div className="rounded-lg bg-white/60 p-4">
                <div className="mb-2 flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Email Address
                  </span>
                </div>
                <p className="font-semibold text-blue-900">{contactEmail}</p>
              </div>

              <div className="rounded-lg bg-white/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-800">
                    Active Users:
                  </span>
                  <span className="font-semibold text-blue-900">
                    {usersData?.total || 0}
                  </span>
                </div>
                {usersData?.users && usersData.users.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {usersData.users.slice(0, 3).map((user, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
                      >
                        {user.type}
                      </span>
                    ))}
                    {usersData.users.length > 3 && (
                      <span className="ml-1 text-xs text-blue-600">
                        +{usersData.users.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default FarmOverview;
